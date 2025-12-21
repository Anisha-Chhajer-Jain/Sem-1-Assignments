
#include <stdio.h>
void table(int n,int i) {
    if(n > 9)        //base case
    return;
    
    printf("%dx%d=%d\n", n,i,n*i);
    table(n+1, i); 
}
int main() {
    table(5,5);   
    return 0;
}



