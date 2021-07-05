// 中序遍历
// 1. 左子树遍历
// 2. 访问根节点
// 3. 右子树遍历
const bt = require('./bt')

const inorder = (root) => {
    if (!root) {
        return
    }
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}

const inorder2 = (root) => {
    if (!root) {
        return
    }
    const stack = []
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right
    }
}
// 4251637
inorder2(bt)