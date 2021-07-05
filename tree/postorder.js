// 后序遍历
// 1. 左子树遍历
// 2. 右子树遍历
// 3. 访问根节点
const bt = require('./bt')

const postorder = (root) => {
    if (!root) {
        return
    }
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}

// 逆 先序遍历
const postorder2 = (root) => {
    if (!root) {
        return
    }
    const outputStack = []
    const stack = [root]
    while (stack.length) {
        const n = stack.pop()
        outputStack.push(n)
        if (n.left) {
            stack.push(n.left)
        }
        if (n.right) {
            stack.push(n.right)
        }
    }
    while (outputStack.length) {
        const n = outputStack.pop()
        console.log(n.val)
    }
}

postorder(bt)