var t =
    new Vue({
        el: '#view_tables',
        data: function () {
            this.update_tables("https://0554824e-b41e-45ef-983d-359639fe3741.mock.pstmn.io/performance_tables")
            return {
                tables: {}
            }
        },
        methods: {
            update_tables: function (uri) {
                axios.get(uri).then(rep => {
                    this.tables = rep.data.tables;
                })
            }
        }
    })