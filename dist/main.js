/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5dHJlZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cblxuY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgdGhpcy5yaWdodCA9IG51bGw7XG4gIH1cbn1cblxuY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGFycikge1xuICAgIHRoaXMucm9vdCA9IHRoaXMuYnVpbGRUcmVlKGFyciwgMCwgYXJyLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgYnVpbGRUcmVlKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShhcnJbbWlkXSk7XG4gICAgbm9kZS5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyLCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKGFyciwgbWlkICsgMSwgZW5kKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIGluc2VydFxuICBpbnNlcnQodmFsdWUpIHtcbiAgICBjb25zdCBpbnNlcnRIZWxwZXIgPSAobm9kZSwgdmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA8IG5vZGUudmFsdWUpIHtcbiAgICAgICAgaWYgKCFub2RlLmxlZnQpIHtcbiAgICAgICAgICBub2RlLmxlZnQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zZXJ0SGVscGVyKG5vZGUubGVmdCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID4gbm9kZS52YWx1ZSkge1xuICAgICAgICBpZiAoIW5vZGUucmlnaHQpIHtcbiAgICAgICAgICBub2RlLnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluc2VydEhlbHBlcihub2RlLnJpZ2h0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5zZXJ0SGVscGVyKHRoaXMucm9vdCwgdmFsdWUpO1xuICB9XG5cbiAgLy8gZGVsZXRlXG4gIGRlbGV0ZSh2YWx1ZSkge1xuICAgIHRoaXMucm9vdCA9IHRoaXMuZGVsZXRlTm9kZSh0aGlzLnJvb3QsIHZhbHVlKTtcbiAgfVxuXG4gIGRlbGV0ZU5vZGUobm9kZSwga2V5KSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCB1cGRhdGVkTm9kZTtcblxuICAgIGlmIChrZXkgPCBub2RlLnZhbHVlKSB7XG4gICAgICB1cGRhdGVkTm9kZSA9IG5ldyBOb2RlKG5vZGUudmFsdWUpO1xuICAgICAgdXBkYXRlZE5vZGUubGVmdCA9IHRoaXMuZGVsZXRlTm9kZShub2RlLmxlZnQsIGtleSk7XG4gICAgICB1cGRhdGVkTm9kZS5yaWdodCA9IG5vZGUucmlnaHQ7XG4gICAgfSBlbHNlIGlmIChrZXkgPiBub2RlLnZhbHVlKSB7XG4gICAgICB1cGRhdGVkTm9kZSA9IG5ldyBOb2RlKG5vZGUudmFsdWUpO1xuICAgICAgdXBkYXRlZE5vZGUubGVmdCA9IG5vZGUubGVmdDtcbiAgICAgIHVwZGF0ZWROb2RlLnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKG5vZGUucmlnaHQsIGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUucmlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9kZS5sZWZ0O1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVkTm9kZSA9IG5ldyBOb2RlKHRoaXMubWluVmFsdWVOb2RlKG5vZGUucmlnaHQpLnZhbHVlKTtcbiAgICAgIHVwZGF0ZWROb2RlLmxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICB1cGRhdGVkTm9kZS5yaWdodCA9IHRoaXMuZGVsZXRlTm9kZShub2RlLnJpZ2h0LCB1cGRhdGVkTm9kZS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWROb2RlO1xuICB9XG5cbiAgbWluVmFsdWVOb2RlKG5vZGUpIHtcbiAgICBsZXQgY3VycmVudCA9IG5vZGU7XG4gICAgd2hpbGUgKGN1cnJlbnQubGVmdCAhPT0gbnVsbCkge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICBmaW5kKHZhbHVlLCBub2RlID0gdGhpcy5yb290KSB7XG4gICAgY29uc3QgeyByb290IH0gPSB0aGlzO1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBub2RlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIDwgbm9kZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZCh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gbm9kZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV2ZWxPcmRlcihjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICBjb25zdCB2aXNpdGVkTm9kZXMgPSBbXTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgY29uc29sZS5sb2cobm9kZS52YWx1ZSk7XG4gICAgICB2aXNpdGVkTm9kZXMucHVzaChub2RlKTtcblxuICAgICAgaWYgKG5vZGUubGVmdCkge1xuICAgICAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdCk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yaWdodCkge1xuICAgICAgICBxdWV1ZS5wdXNoKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjYWxsYmFjayh2aXNpdGVkTm9kZXMpO1xuICB9XG5cbiAgaW5PcmRlcihub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCB0cmVlQXJyYXkgPSBbXTtcblxuICAgIGlmIChub2RlLmxlZnQpIHtcbiAgICAgIHRyZWVBcnJheS5wdXNoKC4uLnRoaXMuaW5PcmRlcihub2RlLmxlZnQpKTtcbiAgICB9XG5cbiAgICB0cmVlQXJyYXkucHVzaChub2RlLnZhbHVlKTtcblxuICAgIGlmIChub2RlLnJpZ2h0KSB7XG4gICAgICB0cmVlQXJyYXkucHVzaCguLi50aGlzLmluT3JkZXIobm9kZS5yaWdodCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmVlQXJyYXk7XG4gIH1cblxuICBwb3N0T3JkZXIobm9kZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRyZWVBcnJheSA9IFtdO1xuXG4gICAgaWYgKG5vZGUubGVmdCkge1xuICAgICAgdHJlZUFycmF5LnB1c2goLi4udGhpcy5wb3N0T3JkZXIobm9kZS5sZWZ0KSk7XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0KSB7XG4gICAgICB0cmVlQXJyYXkucHVzaCguLi50aGlzLnBvc3RPcmRlcihub2RlLnJpZ2h0KSk7XG4gICAgfVxuICAgIHRyZWVBcnJheS5wdXNoKG5vZGUudmFsdWUpO1xuICAgIHJldHVybiB0cmVlQXJyYXk7XG4gIH1cblxuICBoZWlnaHQobm9kZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdEhlaWdodCA9IHRoaXMuaGVpZ2h0KG5vZGUubGVmdCk7XG4gICAgY29uc3QgcmlnaHRIZWlnaHQgPSB0aGlzLmhlaWdodChub2RlLnJpZ2h0KTtcblxuICAgIHJldHVybiBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xuICB9XG59XG5cbmNvbnN0IHRlc3RBcnJheSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA5XTtcbmNvbnN0IHRlc3RUcmVlID0gbmV3IFRyZWUodGVzdEFycmF5KTtcbmNvbnN0IHRlc3RGdW5jID0gbm9kZSA9PiB7XG4gIGNvbnNvbGUubG9nKG5vZGUudmFsdWUgKyAxKTtcbn07XG50ZXN0VHJlZS5sZXZlbE9yZGVyKHRlc3RGdW5jKTtcblxudGVzdFRyZWUuaGVpZ2h0KDIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9