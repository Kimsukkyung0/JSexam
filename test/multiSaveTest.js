
      $.fnSave(){
        if (listData4Reg.size + listData4Upd.size === 0) {
            alert("변경된 내용이 없습니다");
            return false;
        }else if (!fnSaveCheck()) {
            console.log("전송데이터 유효성 검증 실패")
            return false;
        }else{
            var confirmation = confirm("저장하시겠습니까?")
        if (confirmation) {
            // 새 이벤트 추가
            try{
                if(listData4Reg>0){
                fnInsNewEvts(listData4Reg)
                    console.log("인서트 작동")
                    }
                if(listData4Upd>0){
                fnUpdPreEvts(listData4Upd)
                    console.log("업뎃 작동")
                    }
                $.fnSearch();
            }catch(error){
                console.error("저장 중 오류 발생:");
            }
        }

            }

    }

    ///////신규이벤트 추가

    var fnInsNewEvts = function (listData4Reg) {
        var url;
        var objParam = "";
        var evtOrgParam = "";
        var evtGiftParam = "";
        //ins, upd 공통데이터 생성
        for (let i = 0; i > listData4Upd.size; i++) {
            objParam = {
                CU_EVENT_DP_NM: listData4Reg.CU_EVENT_DP_NM
                , CU_EVENT_SUBSCRIPTION_TP: default_cuEvtSubTp
                , CU_BNF_TP: default_cuBntTp
                , ST_DTM: listData4Reg.ST_DTM
                , ED_DTM: listData4Reg.ED_DTM
                , USE_YN: listData4Reg.USE_YN
                , SIMPL_DESC: listData4Reg.SIMPL_DESC
                , ORG_CU_EVENT_YN: cd4ORG_CU_EVENT_YN
                , ORDER_NO: txtOrderNo
            }

            evtOrgParam = {
                ORG_ST_DTM: listData4Reg.ST_DTM
                , ORG_ED_DTM: listData4Reg.ED_DTM
                , ORG_NO: listData4Reg.ORG_NO
                , NOTE: listData4Reg.SIMPL_DESC
            }

            evtGiftParam = {
                ITEM_CD: listData4Reg.ITEM_CD
                , GIVE_CNT: listData4Reg.GIVE_CNT
                , UNIT_CD: "1"
                , ORDER_NO: txtOrderNo
                , NOTE: listData4Reg.SIMPL_DESC
            }
            console.log("인서트 실행중")
            url = "/pmgr/pmpt/insertNewCuEvent.json";

            objParam.CU_EVENT_TP = cd4NewCustomerEvt;
            objParam.ORG_CU_EVENT_YN = cd4ORG_CU_EVENT_YN;
            objParam.evtOrgParam = JSON.stringify(evtOrgParam);
            objParam.evtGiftParam = JSON.stringify(evtGiftParam);

            $.callAjax(url, null, objParam, null, null, function (data) {
                //console.log(data);
                if (data.RESULT_MAP.RTN == "N") {
                    alert(data.RESULT_MAP.MSG);
                } else {
                    alert(data.RESULT_MAP.ERR_MSG);
                    if (data.RESULT_MAP.ERR_CD == "SUCCESS") {
                        console.log("인서트 완~")
                    }
                }
            })
        }
    }

    var fnUpdPreEvts = function (listData4Upd) {
        var url;
        var objParam = "";
        var evtOrgParam = "";
        var evtGiftParam = "";
        //ins, upd 공통데이터 생성

        for (let i = 0; i > listData4Upd.size; i++) {
            objParam = {
                CU_EVENT_DP_NM: listData4Upd.CU_EVENT_DP_NM
                , CU_EVENT_SUBSCRIPTION_TP: default_cuEvtSubTp
                , CU_BNF_TP: default_cuBntTp
                , ST_DTM: listData4Upd.ST_DTM
                , ED_DTM: listData4Upd.ED_DTM
                , USE_YN: listData4Upd.USE_YN
                , SIMPL_DESC: listData4Upd.SIMPL_DESC
                , ORG_CU_EVENT_YN: cd4ORG_CU_EVENT_YN
                , ORDER_NO: txtOrderNo
            }

            evtOrgParam = {
                ORG_ST_DTM: listData4Upd.ST_DTM
                , ORG_ED_DTM: listData4Upd.ED_DTM
                , ORG_NO: listData4Upd.ORG_NO
                , NOTE: listData4Upd.SIMPL_DESC
            }

            evtGiftParam = {
                ITEM_CD: listData4Upd.ITEM_CD
                , GIVE_CNT: listData4Upd.GIVE_CNT
                , UNIT_CD: "1"
                , ORDER_NO: txtOrderNo
                , NOTE: listData4Upd.SIMPL_DESC
            }

            url = "/pmgr/pmpt/updateNewCuEvent.json";
            objParam.CU_EVENT_NO = cuEventNo;
            evtGiftParam.CU_EVENT_NO = cuEventNo;
            evtOrgParam.CU_EVENT_NO = cuEventNo;

            // objParam.ORDER_NO = txtOrderNo;
            evtOrgParam.USE_YN = cboUseYn;
            objParam.evtGiftParam = JSON.stringify(evtGiftParam);
            objParam.evtOrgParam = JSON.stringify(evtOrgParam);

            $.callAjax(url, null, objParam, null, null, function (data) {
                //console.log(data);
                if (data.RESULT_MAP.RTN == "N") {
                    alert(data.RESULT_MAP.MSG);
                } else {
                    alert(data.RESULT_MAP.ERR_MSG);
                    if (data.RESULT_MAP.ERR_CD == "SUCCESS") {

                    }
                }
            })
        }
