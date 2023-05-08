import { gql} from "@apollo/client";

// gqlの使い方
// (order_by: {created_at: desc})はデータの並び替えができる引数
export const GET_USERS = gql`
query GetUsers {
    users(order_by: {created_at: desc}) {
    id
    name
    created_at
  }
}
`

// @cliant をつけるとサーバー側ではなくキャッシュ側をみてくれる
export const GET_USERS_LOCAL = gql`
query GetUsers {
    users(order_by: {created_at: desc}) @cliant {
 
    id
    name
    created_at
  }
}
`

// getStaticProps()で個別ページを作る際に個別のidを使う
export const GET_USERSID = gql`
query GetUsersId {
    users(order_by: {created_at: desc}) {
    id
  }
}
`

// 特定のidを引数に、わたってきたユーザー情報を取得する
// query 関数名{$id: uuid!}{
//     users_by_pk(id: $id) {
//         id
//         name
//         created_at
//       }
// }
export const GET_USERSBY_ID = gql`
query GetUsersById($id: uuid!) {
    users_by_pk(id: $id) {
    id
    name
    created_at
  }
}
`

// ユーザーの作成 insert_users_oneをつかう
export const CREATE_USER = gql`
mutation CreateUser($name: String!) {
  insert_users_one(object: {name: $name}) {
    id
    name
    created_at
  }
}
`

// ユーザーの削除　delete_users_by_pk(id:$id)を使う
export const DELETE_USER = gql`
mutation DeleteUser($id: uuid!) {
  delete_users_by_pk(id:$id) {
    id
    name
    created_at
  }
}
`

// 更新　update_users_by_pk()
// pk_columns: {id: ""} で更新するidを指定
// _set: {name: ""} で変更したい内容を指定
// 戻り値に変更後の属性を取得
export const UPDATE_USER = gql`
mutation UpdateUser($id: uuid!, $name: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
    name
    created_at
  }
}
`

// データ型の自動生成　yarn gen-types
// 自動生成時にクエリの名前が同じだとエラーになるので同じ名前がある場合は変更しておく

