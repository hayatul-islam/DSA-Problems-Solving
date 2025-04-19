// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/K
#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);

    char digits[1000001];
    scanf("%s", &digits);

    long long sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum += (digits[i] - '0');
    }

    printf("%d", sum);

    return 0;
}