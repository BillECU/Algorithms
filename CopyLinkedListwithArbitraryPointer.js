//Given a linked list where the node has two pointers, regular next pointer and arbitrary_pointer that points to any node in the linked list. 
//Your job is to write code to make a deep copy of the given linked list. 
//Here, deep copy means that any operations on the original list (inserting, modifying and removing) should not affect the copied list.

//Runtime Complexity
//Linear, O(n).

//Memory Complexity
//Linear, O(n).

let deep_copy_arbitrary_pointer = function(head) {
    if (head == null)
      return null;
    let curr = head;
    while(curr){
      let temp = curr.next;
      curr.next = { ...curr };
      curr.next.next = temp;
      curr = temp;
    }

    curr = head;
    while(curr){
      if(curr.next!=null)
        curr.next.arbitrary_pointer = (curr.arbitrary_pointer!=null)?curr.arbitrary_pointer.next:null;
      curr = curr.next.next;
    }

    curr = head;
    newhead = head.next;
    temp = newhead;
    while(curr){
      curr.next = curr.next.next;
      temp.next = (temp.next!=null)?temp.next.next:temp.next;
      curr = curr.next;
      temp = temp.next;
    }
    return newhead;
};
