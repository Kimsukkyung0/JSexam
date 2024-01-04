    ///추가 전 데이터 검증///
    var fnSaveCheck = function () {
        let validationCounts = {
            nmCnt: 0,
            orgCnt: 0,
            stDtmCnt: 0,
            edDtmCnt: 0,
            useYnCnt: 0,
            itemCdCnt: 0,
            descCnt: 0,
            giveCnt: 0
        };
        //전송데이터 검증
        for (let key of listData4Reg.keys()) {
            var regData = listData4Reg.get(key);//uid를 활용해 for 문 사용
            if (regData.CU_EVENT_DP_NM === "") validationCounts.nmCnt++;
            if (regData.ORG_NO === "") validationCounts.orgCnt++;
            if (regData.ST_DTM === "" || regData.ED_DTM === "") {
                validationCounts.stDtmCnt++;
                validationCounts.edDtmCnt++;
            } else if (regData.ED_DTM < regData.ST_DTM) {
                alert("이벤트 종료일이 시작일 보다 빠를 수 없습니다.");
                return false;
            }
            if (regData.USE_YN === "") validationCounts.useYnCnt++;
            if (regData.ITEM_CD === "") validationCounts.itemCdCnt++;
            if (regData.SIMPL_DESC === "") validationCounts.descCnt++;
            if (regData.GIVE_CNT === "") validationCounts.giveCnt++;
        }
        for (let key of listData4Upd.keys()) {
            var updData = listData4Upd.get(key);//uid를 활용해 for 문 사용
            if (updData.CU_EVENT_DP_NM === "") validationCounts.nmCnt++;
            if (updData.ORG_NO === "") validationCounts.orgCnt++;
            if (updData.ST_DTM === "" || updData.ED_DTM === "") {
                validationCounts.stDtmCnt++;
                validationCounts.edDtmCnt++;
            } else if (updData.ED_DTM < updData.ST_DTM) {
                alert("이벤트 종료일이 시작일 보다 빠를 수 없습니다.");
                return false;
            }
            if (updData.USE_YN === "") validationCounts.useYnCnt++;
            if (updData.ITEM_CD === "") validationCounts.itemCdCnt++;
            if (updData.SIMPL_DESC === "") validationCounts.descCnt++;
            if (updData.GIVE_CNT === "") validationCounts.giveCnt++;
        }


        if (validationCounts.nmCnt > 0) {
            alert("이벤트 명을 입력되지 않은 항목이 있습니다" + validationCounts.nmCnt);
            return false;
        }
        if (validationCounts.stDtmCnt > 0) {
            alert("이벤트 시작일이 입력되지 않은 항목이 있습니다" + validationCounts.stDtmCnt);
            return false;
        }
        if (validationCounts.edDtmCnt > 0) {
            alert("이벤트 종료일이 입력되지 않은 이벤트가 있습니다" + validationCounts.edDtmCnt);
            return false;
        }
        if (validationCounts.useYnCnt > 0) {
            alert("이벤트 사용여부가 입력되지 않은 이벤트가 있습니다" + validationCounts.useYnCnt);
            return false;
        }
        if (validationCounts.itemCdCnt > 0) {
            alert("사은품이 선택되지않은 이벤트가 있습니다" + validationCounts.itemCdCnt);
            return false;
        }
        if (validationCounts.descCnt > 0) {
            alert("이벤트 설명이 입력되지 않은 항목이 있습니다" + validationCounts.descCnt);
            return false;
        }
        if (validationCounts.giveCnt > 0) {
            alert("사은품 증정 갯수가 입력되지 않은 항목이 있습니다" + validationCounts.giveCnt);
            return false;
        }

        return true;
    }
