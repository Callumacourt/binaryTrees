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
    // Sort and remove duplicates from the input array
    const sortedUniqueArray = [...new Set(arr.sort((a, b) => a - b))];
    this.root = this.buildTree(
      sortedUniqueArray,
      0,
      sortedUniqueArray.length - 1
    );
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

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          break;
        }
      } else {
        return;
      }
    }
  }

  delete(value) {
    let parentNode = null;
    let currentNode = root;

    while (currentNode !== null && value !== currentNode.value) {
      parentNode = currentNode;
      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }

    if (currentNode === null) {
      return root; // Value not found, nothing to delete
    }

    if (!currentNode.left && !currentNode.right) {
      // Node is a leaf node
      if (!parentNode) {
        root = null;
      } else {
        parentNode.left === currentNode
          ? (parentNode.left = null)
          : (parentNode.right = null);
      }
    } else {
      // Node has one or two children
      let childNode = currentNode.left || currentNode.right;

      if (!parentNode) {
        root = childNode;
      } else {
        parentNode.left === currentNode
          ? (parentNode.left = childNode)
          : (parentNode.right = childNode);
      }

      if (currentNode.left && currentNode.right) {
        // Node has two children
        let successorParent = currentNode;
        let successor = currentNode.right;

        while (successor.left) {
          successorParent = successor;
          successor = successor.left;
        }

        currentNode.value = successor.value;

        successorParent.left === successor
          ? (successorParent.left = successor.right)
          : (successorParent.right = successor.right);
      }
    }

    return root;
  }

  find(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true; // Value found
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false; // Value not found
  }

  levelOrder(callback) {
    if (!this.root) {
      throw new Error('Tree is empty');
    }

    const queue = [];
    let currentNode;

    queue.push(this.root);

    while (queue.length > 0) {
      currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      callback(currentNode);
    }
  }

  inOrder(callback, root) {
    if (!root) {
      return;
    }

    if (root.left) {
      this.inOrder(callback, root.left);
    }

    callback(root);

    if (root.right) {
      this.inOrder(callback, root.right);
    }
  }

  preorder(callback, root = this.root) {
    if (!root) {
      throw new Error('Invalid root: null');
    }

    callback(root);

    if (root.left) {
      this.preorder(callback, root.left);
    }

    if (root.right) {
      this.preorder(callback, root.right);
    }
  }

  postOrder(callback, root) {
    if (!root) {
      throw new Error('Invalid root: null');
    }

    if (root.left) {
      this.postOrder(callback, root.left);
    }

    if (root.right) {
      this.postOrder(callback, root.right);
    }

    callback(root);
  }

  depth(node) {
    if (!node) {
      return -1;
    }

    let currentNode = this.root;
    let depth = 0;

    while (currentNode) {
      if (node.value === currentNode.value) {
        return height;
      }

      if (node.value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      depth += 1;
    }

    // Node not found
    return -1;
  }

  height(node) {
    if (!node) {
      return -1; // Height of an empty subtree is -1 by convention
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced(node) {
    if (!node) {
      return true; // An empty subtree is balanced
    }

    // Calculate the height of the left and right subtrees
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Check if the current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    // Recursively check the balance for left and right subtrees
    return isBalanced(node.left) && isBalanced(node.right);
  }
}
