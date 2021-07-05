// 先序遍历
// 1. 访问根节点
// 2. 左子树遍历
// 3. 右子树遍历
const bt = require('./bt')

const preorder = (root) => {
    if (!root) {
        return
    }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}

const preorder2 = (root) => {
    if (!root) {
        return
    }
    const stack = [root]
    while (stack.length > 0) {
        const n = stack.pop()
        console.log(n.val)
        if (n.right) {
            stack.push(n.right)
        }
        if (n.left) {
            stack.push(n.left)
        }
    }
}

preorder(bt)
preorder2(bt)