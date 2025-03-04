class Node {
  key : string;
  left : Node | null;
  right : Node | null;

  constructor(key : string) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root : Node | null;

  constructor() {
    this.root = null;
  }

  static search(
    tree : Node | null,
    keyin : string,
  ) : Node | null {
    let p : Node | null = tree;
    let found : boolean = false;

    while (p !== null && !found) {
      if (p.key === keyin) {
        found = true;
      } else if (keyin < p.key) {
        p = p.left; // 왼쪽 자식 노드로 이동
      } else {
        p = p.right; // 오른쪽 자식 노드로 이동
      }
    }

    return p;
  }

  insert(key : string) : void {
    const newNode = new Node(key);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current : Node = this.root;
    while (true) {
      if (key < current.key) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }
}

class App {
  static main() : void {
    const bst = new BinarySearchTree();
    bst.insert("Ralph");
    bst.insert("Devia");
    bst.insert("Ursula");
    bst.insert("Carmen");
    bst.insert("Isabelle");
    bst.insert("Tom");
    bst.insert("Wally");

    const keyToSearch = "Tom";
    const resultNode = BinarySearchTree.search(bst.root, keyToSearch);

    if (resultNode) {
      console.log(`Key ${keyToSearch} found in the tree.`);
    } else {
      console.log(`Key ${keyToSearch} not found in the tree.`);
    }

    const keyToSearch2 = "Jay";
    const resultNode2 = BinarySearchTree.search(bst.root, keyToSearch2);

    if (resultNode2) {
      console.log(`Key ${keyToSearch2} found in the tree.`);
    } else {
      console.log(`Key ${keyToSearch2} not found in the tree.`);
    }
  }
}

App.main();