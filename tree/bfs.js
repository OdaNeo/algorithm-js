// bfs
// 1. 新建队列，把根节点入队
// 2. 把队头出对并访问
// 3. 把队头的children挨个入队
// 4. 重复2，3
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

const bfs = (root) => {
    const q = [root];
    while (q.length > 0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => { q.push(child) })
    }
}

bfs(tree)
