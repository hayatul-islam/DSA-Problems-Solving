// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/V

#include <stdio.h>
int main(){
    int n, m;
    scanf("%d %d", &n, &m);
    int count[m+1];

    for(int i=0; i<=m; i++){
        count[i] = 0;
    }

    for(int i=0; i<n; i++){
        int x;
        scanf("%d", &x);

        count[x]++;
    }

    for(int i=1; i<=m; i++){
        printf("%d\n", count[i]);
    }
   
    return 0;
}