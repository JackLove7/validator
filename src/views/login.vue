<template>
  <div>
    <cube-form
    :model="model"
    :schema="schema"
    @validate="validateHandler"
    @submit.prevent="submitHandler">
  </cube-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: true,
                reverse: true
            }
            },
            rules: {
              required: true
            },
            trigger: 'blur',
          },{
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    validateHandler(result) {
    },
    submitHandler(e) {      
      this.$store.dispatch('login', this.model).
      then(success => {
        if (success) {
          const path = this.$route.query.redirect && '/'
          this.$router.push(path)
        }
      }).catch(error => {
        const toast = this.$createToast({
          time: 2000,
          txt: '登录失败',
          type: 'error'
        }).show()
      })
    }
  },
}
</script>
<style scoped>

</style>>
