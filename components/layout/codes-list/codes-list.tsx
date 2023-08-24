
import CodeCard from "../code-card/code-card"

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { activateCode, getCodesById } from "@/store/ducks/subscriptions/actions";
import { useState } from "react";

import Button from "@/components/ui/button/button";

import putManageCode from "@/services/put-manage-codes";

const CodesList = ({ isUpgrade }: { isUpgrade: boolean }) => {

  const [markedCodes, setMarkedCodes] = useState<number[]>([]);

  const dispatch = useAppDispatch();

  const codes = useAppSelector(store => store.subscriptions.codes);
  const token = useAppSelector(store => store.auth.token);
  const viewSubscriptionsId = useAppSelector(store => store.subscriptions.viewSubscriptionsId);
  const sitesCount = useAppSelector(store => store.subscriptions.sitesCount);

  const handlerActivateCode = (domain: string, code: string, id: number) => {
    dispatch(activateCode({ domain, code, id }));
  }

  const handlerCheckCode = (codeId: number) => {
    setMarkedCodes(state => {
      if (!state.includes(codeId)) {
        return [...state, codeId]
      } else {
        return state.filter(item => item !== codeId);
      }
    })
  }

  const handlerConfirm = () => {
    putManageCode(token, viewSubscriptionsId, markedCodes)
      .then(res => {
        if (!res.data.message) {
          dispatch(getCodesById({ subscriptionId: viewSubscriptionsId, token }));
          setMarkedCodes([]);
        }
      })
  }

  return (
    <>
      <div className="subscriptions__licenses">
        {
          codes.map((item: any, id: number) => (
            <CodeCard
              code={item.code}
              origin={item.origin}
              status={item.status}
              onActivate={(domain: string, code: string) => handlerActivateCode(domain, code, id)}
              key={item.codeId}
              upgrade={isUpgrade && sitesCount > markedCodes?.length && sitesCount < codes.length || markedCodes.includes(item.codeId)}
              isChecked={markedCodes.includes(item.codeId)}
              onCheckCode={() => handlerCheckCode(item.codeId)}
            />
          ))
        }
      </div>
      <div className="subscriptions_pos-right">
        <div className="subscriptions__button">
          <Button
            text="Confirm"
            width="w100"
            height="h72px"
            onClick={handlerConfirm}
            disabled={!isUpgrade}
          />
        </div>
      </div>
    </>
  )
}

export default CodesList;