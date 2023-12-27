/* eslint-disable max-classes-per-file */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);
    return node;
  }

  // insert
  insert(value) {
    const insertHelper = (node, value) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
        } else {
          insertHelper(node.left, value);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
        } else {
          insertHelper(node.right, value);
        }
      }
    };

    insertHelper(this.root, value);
  }

  // delete
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, key) {
    if (node === null) {
      return null;
    }

    let updatedNode;

    if (key < node.value) {
      updatedNode = new Node(node.value);
      updatedNode.left = this.deleteNode(node.left, key);
      updatedNode.right = node.right;
    } else if (key > node.value) {
      updatedNode = new Node(node.value);
      updatedNode.left = node.left;
      updatedNode.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      updatedNode = new Node(this.minValueNode(node.right).value);
      updatedNode.left = node.left;
      updatedNode.right = this.deleteNode(node.right, updatedNode.value);
    }

    return updatedNode;
  }

  minValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  find(value, node = this.root) {
    const { root } = this;
    if (root === null) {
      return null;
    }
    if (value === node.value) {
      return node;
    }
    if (value < node.value) {
      return this.find(value, node.left);
    }
    if (value > node.value) {
      return this.find(value, node.right);
    }
    return null;
  }

  levelOrder(callback) {
    if (!this.root) {
      return;
    }

    const queue = [this.root];
    const visitedNodes = [];

    while (queue.length !== 0) {
      const node = queue.shift();
      console.log(node.value);
      visitedNodes.push(node);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    callback(visitedNodes);
  }

  inOrder(node) {
    if (node === null) {
      return [];
    }

    const treeArray = [];

    if (node.left) {
      treeArray.push(...this.inOrder(node.left));
    }

    treeArray.push(node.value);

    if (node.right) {
      treeArray.push(...this.inOrder(node.right));
    }

    return treeArray;
  }

  postOrder(node) {
    if (node === null) {
      return [];
    }
    const treeArray = [];

    if (node.left) {
      treeArray.push(...this.postOrder(node.left));
    }
    if (node.right) {
      treeArray.push(...this.postOrder(node.right));
    }
    treeArray.push(node.value);
    return treeArray;
  }

  height(node) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 9];
const testTree = new Tree(testArray);
const testFunc = node => {
  console.log(node.value + 1);
};
testTree.levelOrder(testFunc);

testTree.height(2);
