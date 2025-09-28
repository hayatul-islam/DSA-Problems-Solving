// https://www.codechef.com/problems/PHONEYR

#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    n %= 100;

    cout << "K";

    if (n < 10)
        cout << "0";

    cout << n;

    return 0;
}