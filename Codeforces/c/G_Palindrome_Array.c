// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/G


#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int i=0, j=n-1;
    while(i<j){
        
        if(arr[i] != arr[j]){
           printf("NO");
           return 0; 
        }

        i++;
        j--;

    }

    printf("YES");

    return 0;
}