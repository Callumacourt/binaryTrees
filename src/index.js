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
}
