//Given two sorted linked lists, merge them so that the resulting linked list is also sorted.

//Runtime Complexity
//Linear, O(m + n) where m and n are lengths of both linked lists.

//Memory Complexity
//Constant, O(1)

let merge_sorted = function(head1, head2) {
  if(!head1)
    return head2;
  else if(!head2)
    return head1;

  let merge_head = null;
  if(head1.data<head2.data){
    merge_head = head1;
    head1 = head1.next;
  }
  else
  {
    merge_head = head2;
    head2 = head2.next;
  }
  let merge_temp = merge_head;
  while(head1&&head2){
    let temp = null;
    if(head1.data<head2.data){
      temp = head1;
      head1 = head1.next;
    }
    else
    {
      temp = head2;
      head2 = head2.next;
    }
    merge_temp.next = temp;
    merge_temp = temp;
  }
  if(head1){
    merge_temp.next = head1;
  }  
  else{
    merge_temp.next = head2;
  } 
  
  return merge_head;
};
