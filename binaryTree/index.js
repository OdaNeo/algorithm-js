const bt = require("./bt");

const preOrder = (root) => {
    if (root === null) {
        return [];
    }
    return [root.val, ...preOrder(root.left), ...preOrder(root.right)];
};
console.log(preOrder(bt));
