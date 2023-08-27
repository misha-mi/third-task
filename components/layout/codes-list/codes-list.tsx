import "./codes-list.sass";
import { ICodeList, THandlerCheckCode, TMarkedCodes } from "./type";

import CodeCard from "../code-card/code-card"
import Button from "@/components/ui/button/button";

import putManageCodes from "@/services/put-manage-codes";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { getCodesById } from "@/store/ducks/subscriptions/actions";
import { useEffect, useState } from "react";

const CodesList = ({ isUpgrade }: ICodeList) => {

  const [markedCodes, setMarkedCodes] = useState<TMarkedCodes>([]);

  const dispatch = useAppDispatch();

  const codes = useAppSelector(store => store.subscriptions.codes);
  const token = useAppSelector(store => store.auth.token);
  const viewSubscriptionsId = useAppSelector(store => store.subscriptions.viewSubscriptionsId);
  const sitesCount = useAppSelector(store => store.subscriptions.sitesCount);

  const loadingSubscriptions = useAppSelector(store => store.subscriptions.loadingSubscriptions);
  const loadingCodes = useAppSelector(store => store.subscriptions.loadingCodes);
  const loading = loadingSubscriptions || loadingCodes;

  const handlerCheckCode: THandlerCheckCode = (codeId) => {
    setMarkedCodes(state => {
      if (!state.includes(codeId)) {
        return [...state, codeId]
      } else {
        return state.filter(item => item !== codeId);
      }
    })
  }

  const handlerConfirm = (markedCodes: number[]) => {
    putManageCodes(token, viewSubscriptionsId, markedCodes)
      .then(res => {
        if (!res.data.message) {
          dispatch(getCodesById({ subscriptionId: viewSubscriptionsId, token }));
          setMarkedCodes([]);
        }
      })
  }

  const isHoldAndEqualityCodes = codes.length !== 0 && sitesCount === codes.length && codes[0].status === "HOLD";

  useEffect(() => {
    if (isHoldAndEqualityCodes) {
      const codesIdList = codes.map(item => item.codeId);
      handlerConfirm(codesIdList);
    }
  }, [isHoldAndEqualityCodes])

  return (
    <>
      <div className="codes-list__licenses">
        {!loading && !isHoldAndEqualityCodes ? (
          codes.map((item) => (
            <CodeCard
              code={item.code}
              origin={item.origin}
              status={item.status}
              key={item.codeId}
              upgrade={isUpgrade && sitesCount > markedCodes?.length && sitesCount < codes.length || markedCodes.includes(item.codeId)}
              isChecked={markedCodes.includes(item.codeId)}
              onCheckCode={() => handlerCheckCode(item.codeId)}
            />
          ))
        ) : (
          <>
            <div className="codes-list__loading"></div>
            <div className="codes-list__loading"></div>
            <div className="codes-list__loading"></div>
          </>
        )}
      </div>

      {isUpgrade ? (
        <div className="codes-list_pos-right">
          <div className="codes-list__button">
            <Button
              text="Confirm"
              width="w100"
              height="h72px"
              onClick={() => handlerConfirm(markedCodes)}
              disabled={markedCodes.length === 0}
            />
          </div>
        </div>
      ) : null}

    </>
  )
}

export default CodesList;