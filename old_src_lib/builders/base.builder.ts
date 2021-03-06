import { _INode, hasInternal, IInternal, INode_Base, internal, NodeType } from '../builder.interface';
import { Node_Array } from './array.builder';
import { Node_Boolean } from './boolean.builder';
import { Node_Number } from './number.builder';
import { Node_Object } from './object.builder';
import { Node_Regex } from './regex.builder';
import { Node_String } from './string.builder';
import { Node_Void } from './void.builder';

export const Node_Base = (root: IInternal, self: IInternal): _INode & INode_Base => ({
  [internal]: root,
  get Object() {
    self.children.push({
      type: NodeType.Object,
      data: [],
      children: [],
    });
    return Node_Object(root, self.children[0]);
  },
  get Number() {
    self.children.push({
      type: NodeType.Number,
      data: [],
      children: [],
    });
    return Node_Number(root, self.children[0]);
  },
  get Array() {
    self.children.push({
      type: NodeType.Array,
      data: [],
      children: [],
    });
    return Node_Array(root, self.children[0]);
  },
  get Boolean() {
    self.children.push({
      type: NodeType.Boolean,
      data: [],
      children: [],
    });
    return Node_Boolean(root, self.children[0]);
  },
  get Regex() {
    self.children.push({
      type: NodeType.Regex,
      data: [],
      children: [],
    });
    return Node_Regex(root, self.children[0]);
  },
  get String() {
    self.children.push({
      type: NodeType.String,
      data: [],
      children: [],
    });
    return Node_String(root, self.children[0]);
  },
  and(Rs) {
    self.children.push({
      type: NodeType.And,
      data: [],
      children: Rs.map((r) => {
        if (!hasInternal(r)) { throw new Error('Base.and expects an array of Constraints'); }
        return r[internal];
      }),
    });
    return Node_Void(root);
  },
  or(Rs) {
    self.children.push({
      type: NodeType.Or,
      data: [],
      children: Rs.map((r) => {
        if (!hasInternal(r)) { throw new Error('Base.or expects an array of Constraints'); }
        return r[internal];
      }),
    });
    return Node_Void(root);
  },
  Custom(predicate) {
    // TODO: Add tests to make sure the predicate is a function.
    self.children.push({
      type: NodeType.Custom,
      data: [predicate],
      children: [],
    });
    return Node_Base(root, self.children[0]);
  },
  get not() {
    self.children.push({
      type: NodeType.Not,
      data: [],
      children: [],
    });
    return Node_Base(root, self.children[0]);
  },
  get Any() {
    self.children.push({
      type: NodeType.Any,
      data: [],
      children: [],
    });
    return Node_Void(root);
  },
  get Null() {
    self.children.push({
      type: NodeType.Exact,
      data: [null],
      children: [],
    });
    return Node_Void(root);
  },
  get Undefined() {
    self.children.push({
      type: NodeType.Exact,
      data: [undefined],
      children: [],
    });
    return Node_Void(root);
  },
});
