// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/V

#include <stdio.h>
int main()
{
    int n, m;
    scanf("%d %d", &n, &m);

    int fre[100001] = {0};

    for (int i = 0; i < n; i++)
    {
        int f;
        scanf("%d", &f);

        fre[f - 1]++;
    }

    for (int i = 0; i < m; i++)
    {
        printf("%d\n", fre[i]);
    }

    return 0;
}