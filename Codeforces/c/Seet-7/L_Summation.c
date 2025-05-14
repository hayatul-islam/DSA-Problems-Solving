#include <stdio.h>

long long int sum(int a[], int n, long long int t, int i){
    if(i == n){
        return t;
    }
    sum(a, n, t+a[i], i+1);
}

int main(){
    int n;
    scanf("%d", &n);
    int a[n];
    for(int i=0; i<n; i++){
        scanf("%d", &a[i]);
    }

    long long int total = sum(a, n, 0, 0);
    printf("%lld", total);

    return 0;
}