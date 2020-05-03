var t =
    new Vue({
        el: '#view_tables',
        data: function () {
            return {
                tables: [{
                    title: '동아리 수상 경력',
                    columns: ['번호', '구분', '대회명', '수상내역', '수상년도'],
                    data: [1, '대내', '제 2회 한양대학교 해킹방어대회(HCTF)', '1위', 2019]
                }, {
                    title: '동아리 활동 경력',
                    columns: ['번호', '활동내역', '년도'],
                    data: [1, '학내 홈페이지 상시 점검', '2019']
                }]
            }
        }
    })