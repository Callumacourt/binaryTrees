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
    const queue = this.root;
    const visitedNodes = [];

    while (queue.length != 0) {
      const node = queue.pop();
      console.log(node.val);
      visitedNodes.push(node);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    console.log(callback(visitedNodes));
  }
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 9];
const testTree = new Tree(testArray);
const testFunc = node => {
  console.log(node.value + 1);
};
testTree.levelOrder(testFunc(node));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnl0cmVlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUoYXJyLCAwLCBhcnIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBidWlsZFRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcbiAgICBub2RlLmxlZnQgPSB0aGlzLmJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy5idWlsZFRyZWUoYXJyLCBtaWQgKyAxLCBlbmQpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gaW5zZXJ0XG4gIGluc2VydCh2YWx1ZSkge1xuICAgIGNvbnN0IGluc2VydEhlbHBlciA9IChub2RlLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlIDwgbm9kZS52YWx1ZSkge1xuICAgICAgICBpZiAoIW5vZGUubGVmdCkge1xuICAgICAgICAgIG5vZGUubGVmdCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnNlcnRIZWxwZXIobm9kZS5sZWZ0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLnZhbHVlKSB7XG4gICAgICAgIGlmICghbm9kZS5yaWdodCkge1xuICAgICAgICAgIG5vZGUucmlnaHQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zZXJ0SGVscGVyKG5vZGUucmlnaHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbnNlcnRIZWxwZXIodGhpcy5yb290LCB2YWx1ZSk7XG4gIH1cblxuICAvLyBkZWxldGVcbiAgZGVsZXRlKHZhbHVlKSB7XG4gICAgdGhpcy5yb290ID0gdGhpcy5kZWxldGVOb2RlKHRoaXMucm9vdCwgdmFsdWUpO1xuICB9XG5cbiAgZGVsZXRlTm9kZShub2RlLCBrZXkpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHVwZGF0ZWROb2RlO1xuXG4gICAgaWYgKGtleSA8IG5vZGUudmFsdWUpIHtcbiAgICAgIHVwZGF0ZWROb2RlID0gbmV3IE5vZGUobm9kZS52YWx1ZSk7XG4gICAgICB1cGRhdGVkTm9kZS5sZWZ0ID0gdGhpcy5kZWxldGVOb2RlKG5vZGUubGVmdCwga2V5KTtcbiAgICAgIHVwZGF0ZWROb2RlLnJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICB9IGVsc2UgaWYgKGtleSA+IG5vZGUudmFsdWUpIHtcbiAgICAgIHVwZGF0ZWROb2RlID0gbmV3IE5vZGUobm9kZS52YWx1ZSk7XG4gICAgICB1cGRhdGVkTm9kZS5sZWZ0ID0gbm9kZS5sZWZ0O1xuICAgICAgdXBkYXRlZE5vZGUucmlnaHQgPSB0aGlzLmRlbGV0ZU5vZGUobm9kZS5yaWdodCwga2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9kZS5yaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub2RlLmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZWROb2RlID0gbmV3IE5vZGUodGhpcy5taW5WYWx1ZU5vZGUobm9kZS5yaWdodCkudmFsdWUpO1xuICAgICAgdXBkYXRlZE5vZGUubGVmdCA9IG5vZGUubGVmdDtcbiAgICAgIHVwZGF0ZWROb2RlLnJpZ2h0ID0gdGhpcy5kZWxldGVOb2RlKG5vZGUucmlnaHQsIHVwZGF0ZWROb2RlLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZE5vZGU7XG4gIH1cblxuICBtaW5WYWx1ZU5vZGUobm9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAoY3VycmVudC5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIGZpbmQodmFsdWUsIG5vZGUgPSB0aGlzLnJvb3QpIHtcbiAgICBjb25zdCB7IHJvb3QgfSA9IHRoaXM7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG5vZGUudmFsdWUpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPCBub2RlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLmxlZnQpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiBub2RlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXZlbE9yZGVyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcXVldWUgPSB0aGlzLnJvb3Q7XG4gICAgY29uc3QgdmlzaXRlZE5vZGVzID0gW107XG5cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoICE9IDApIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUudmFsKTtcbiAgICAgIHZpc2l0ZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKG5vZGUubGVmdCkge1xuICAgICAgICBxdWV1ZS51bnNoaWZ0KG5vZGUubGVmdCk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yaWdodCkge1xuICAgICAgICBxdWV1ZS51bnNoaWZ0KG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjYWxsYmFjayh2aXNpdGVkTm9kZXMpKTtcbiAgfVxufVxuXG5jb25zdCB0ZXN0QXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOV07XG5jb25zdCB0ZXN0VHJlZSA9IG5ldyBUcmVlKHRlc3RBcnJheSk7XG5jb25zdCB0ZXN0RnVuYyA9IG5vZGUgPT4ge1xuICBjb25zb2xlLmxvZyhub2RlLnZhbHVlICsgMSk7XG59O1xudGVzdFRyZWUubGV2ZWxPcmRlcih0ZXN0RnVuYyhub2RlKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=