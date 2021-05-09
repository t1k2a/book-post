// 本リスト
// いつかECサイトから取得する　
const database = [
    [
        { id: 1, name: '商品A', price: 100, content: '商品A詳細', review: '面白かった' },
        { id: 2, name: '商品B', price: 200, content: '商品B詳細', review: '楽しかった' },
        { id: 3, name: '商品C', price: 300, content: '商品C詳細', review: 'すごかった'},
    ],
    [
        { id: 4, name: '商品D', price: 100, content: '商品A詳細', review: '面白かった' },
        { id: 5, name: '商品E', price: 200, content: '商品B詳細', review: '楽しかった' },
        { id: 6, name: '商品F', price: 300, content: '商品C詳細', review: 'すごかった'},
    ],

]

// インポート先で使用できる関数をオブジェクトとしてまとめたもの
export default {
    fetch(id) {
        return database
    },
    find(id) {
        return database.find(el => el.id === id)
    },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id))
        }, 1000)
    }
}