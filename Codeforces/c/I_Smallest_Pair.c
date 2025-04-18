// link: https://codeforces.com/group/MWSDmqGsZm/contest/219774/problem/I

#include <stdio.h>
#include <limits.h>
int main()
{
    int t;
    scanf("%d", &t);

    while (t--)
    {
        int n;
        scanf("%d", &n);

        int arr[n];

        for (int i = 0; i < n; i++)
        {
            scanf("%d", &arr[i]);
        }

        int lowestSum = INT_MAX;
        for (int i = 0; i < n; i++)
        {
            for (int j = i + 1; j < n; j++)
            {
                int total = arr[i] + arr[j] + j + 1 - (i + 1);
                if (lowestSum > total)
                {
                    lowestSum = total;
                }
            }
        }
        printf("%d\n", lowestSum);
    }

    return 0;
}
