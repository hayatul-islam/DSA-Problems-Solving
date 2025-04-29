#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);

    int original = N;
    int reversed = 0;

    while (N > 0)
    {
        reversed = reversed * 10 + (N % 10);
        N /= 10;
    }

    printf("%d\n", reversed);

    if (original == reversed)
    {
        printf("YES\n");
    }
    else
    {
        printf("NO\n");
    }

    return 0;
}

// #include <stdio.h>
// #include <string.h>
// int main()
// {
//     char s[1001];
//     scanf("%s", s);

//     printf("%s\n", s);

//     int n = strlen(s);

//     int skip = 0;
//     for(int i=0; i<n; i++){
//         if(skip == 0 && s[i] != 0){
//             skip = 1;
//         }
//     }

//     int i = 0, j = n - 1;
//     while (i < j)
//     {
//         if (s[i] != s[j])
//         {
//             printf("NO");
//             return 0;
//         }

//         i++;
//         j--;
//     }

//     printf("YES");

//     return 0;
// }