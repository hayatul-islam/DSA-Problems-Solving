// link: https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/A


#include <stdio.h>
int main(){
    char s[10001];
    char t[10001];

    scanf("%s %s", s, t);

    int countS = 0;
    for(int i=0; s[i] != '\0'; i++){
        countS++;
    }

    int countT = 0;
    for(int i=0; t[i] != '\0'; i++){
        countT++;
    }

    printf("%d %d\n", countS, countT);
    printf("%s %s", s, t);
    return 0;
}