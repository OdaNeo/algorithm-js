/*
 * @Author: Oda
 * @Date: 2021-06-02 20:20:02
 * @LastEditTime: 2021-06-02 23:15:47
 * @LastEditors: Oda
 * @FilePath: \algorithm-js\stack\callStack.js
 */

const fun1 = () => {
    fun2()
}
const fun2 = () => {
    fun3()
}
const fun3 = () => { }

fun1()