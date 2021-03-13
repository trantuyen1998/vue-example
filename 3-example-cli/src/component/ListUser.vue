<template>
  <div class="list-user">
    <user class="user"
      v-for="user in listUser"
      v-bind:key="user.id"
      v-bind:user="user"
      v-on:deleteUser="deleteUser"
    ></user>
  </div>
</template>
<script>
import User from './User.vue'
export default {
    name:'list-user',
    props:{
        listUser:{
            type:Array,
            default:[]
        }
    },
    data() {
        return {
        }
    },
    components: { User },
    methods:{
        deleteUser(data){
            console.log("Delete user listUser"+ data)
            this.$emit('deleteUserEvent', data)
        }
    }
}
</script>

<style lang="scss">
    .list-user {
        display: flex;
        flex-wrap: wrap;
        justify-self: space-between;
    }
    .list-user .user{
        padding: 30px;
        margin-bottom: 30px;
        border: 1px solid;
        width: calc(33.3333% - 20px);
    }
</style>
