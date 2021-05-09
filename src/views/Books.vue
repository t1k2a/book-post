<style>
pre {
  text-align: start;
  background: #2c3e50;
  color: white;
  padding: 10px;
  font-weight: bold;
}

.item {
  padding: 5px;
}

.container {
  margin: auto;
  width: 600px;
  display: flex;
  justify-content: space-around;
}
</style>

<template>
    <!-- draggable属性(draggable=".item")を付与 -->
    <div class="container">
        <draggable v-model="database[0]" draggable=".item" group="books" handle=".handle" :animation="300">
            <!-- ドラッグ可能にするためにclass属性(class="item")を付与 -->
            <v-col v-for="{ id, name } in database[0]" :key="id" cols="auto" class="item">
                <router-link :to="`/book/${ id }`" class="handle">{{ name }}</router-link>
            </v-col>
        </draggable>
        <draggable v-model="database[1]" draggable=".item" group="books" handle=".handle" :animation="300">
            <v-col v-for="{ id, name } in database[1]" :key="id" cols="auto" class="item">
                <router-link :to="`/book/${ id }`" class="handle">{{ name }}</router-link>
            </v-col>
        </draggable>
        <div><pre>{{formattedItem1}}</pre></div>
        <div><pre>{{formattedItem2}}</pre></div>
    </div>
        <!-- カード追加ボタン -->
        <!-- itemクラスが付与されていないためドラッグ不可 -->
        <!-- <v-col cols="auto">
            <v-btn>
                <v-icon><mdi-plus></mdi-plus></v-icon>
            </v-btn>
        </v-col> -->
</template>

<script>
import  vue from 'vue'
import  books  from '@/api/books'
import  draggable from 'vuedraggable'

function dumpObj(obj){
    return JSON.stringify(obj, null, 2)
}

const database = books.fetch();

export default vue.extend({
    name: "Swap",
    components: {
        draggable,
    },
    data() {
        return {
            inDrag: false,
            database
        }
    },
    computed: {
        // list: () => books.fetch()
        list: {
            get() {
                return books.fetch()
            },
            set(value) {
                this.books.commit('updateList', value)
            },
           
        },
        formattedItem1() {
            return dumpObj(this.database[0])
        },
            formattedItem2() {
            return dumpObj(this.database[1])
        },
    },
})
// 本の詳細ページを作る
</script>
