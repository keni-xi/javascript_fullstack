<template>
  <div class="note-detail">
      <div class="note-img">
          <img :src="detailData.head_img" alt="">
      </div>
      <div class="note-content">
          <div class="tab">
              <span class="comm note-type">{{detailData.note_type}}</span>
              <span class="comm nickname">sdasd</span>
          </div>
          <p class="title">zxccdcss</p>
          <div class="content">hhghghhhvv</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'noteDetail',
    data(){
        return{
            detailData:{}
        }
    },
    created(){
        this.initDetail()
    },
    methods:{
        initDetail(){
                let id=this.$route.query.id
                this.$http({
                    method:'post',
                    url:'http://localhost:3000/users/findNoteListBytype',
                    data:{
                        id:id
                    }
                })
                .then((res)=>{
                    console.log(res)
                    if(res.data,code==='200'){
                        this.dateilData=res.data.data
                    }else{
                        this.$toast('查询失败')
                    }
                })
            }
        }
    }

</script>

<style>

</style>