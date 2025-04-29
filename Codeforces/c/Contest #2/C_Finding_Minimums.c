// link: https://codeforces.com/group/MWSDmqGsZm/contest/326907/problem/C

#include <stdio.h>
#include <limits.h>
int main()
{
    int n, k;
    scanf("%d %d", &n, &k);

    int a[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }

    for (int i = 0; i < n; i += k)
    {
        int min = INT_MAX;
        for (int j = i; j < k + i && j < n; j++)
        {

            if (min > a[j])
            {
                min = a[j];
            }
        }

        printf("%d ", min);
    }

    return 0;
}