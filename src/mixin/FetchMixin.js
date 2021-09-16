import { mapActions } from 'vuex'
export default {
  created () {
    console.log('패치데이터11')
    this.fetchData()
  },
  methods: {
    ...mapActions(['FETCHLISTS']),
    fetchData () {
      // 데이터 가져오기
      this.FETCHLISTS({ routeName: this.$route.name, id: this.$route.params ? this.$route.params.id : '' })
    }
  }
}
