import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
   plugins: [createdPersistedState()],
   //決り文句 ここで定義されたものはブラウザに保存されるので使える
   state: {
      memos: [
         { id: 1, body: 'サンプルです'}
      ]
   },
   mutations: {
      save(state, memo) {
         //新しいidをわりふる
         var max = state.memos[state.memos.length -1].id;
         memo.id = max + 1;
         //saveはハンドラーというらしい
         state.memos.push(memo);
      },
      update(state, data) {
         let x = state.memos.find(memo => memo.id == data.id);
         x.body = data.body;
      }
   }
})