
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isChildrenValidBST(root: TreeNode | null, minValue: number, maxValue: number): boolean {
    if (root === null) {
        return true;
    }

    if (root.val <= minValue || root.val >= maxValue) {
        return false;
    }

    return isChildrenValidBST(root.left, minValue, root.val)
        && isChildrenValidBST(root.right, root.val, maxValue);
}

function isValidBST(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    return isChildrenValidBST(root.left, Number.NEGATIVE_INFINITY, root.val) && isChildrenValidBST(root.right, root.val, Number.POSITIVE_INFINITY);
};
