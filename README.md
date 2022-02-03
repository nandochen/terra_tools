# terra_tools

1) Find tx of operations from: 
a) https://atomscan.com/terra/accounts/terra1alpf6snw2d76kkwjv3dp4l7pcl6cn9uytq89zk
b) https://atomscan.com/terra/

2) Replace tx in the terra_query.js

3) Output
/*raw_log*/
[{"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmos.gov.v1beta1.MsgVote"},{"key":"module","value":"governance"},{"key":"sender","value":"terra1alpf6snw2d76kkwjv3dp4l7pcl6cn9uytq89zk"}]},{"type":"proposal_vote","attributes":[{"key":"option","value":"{\"option\":1,\"weight\":\"1.000000000000000000\"}"},{"key":"proposal_id","value":"180"}]}]}]
/*bytes*/
5b 7b 22 65 76 65 6e 74 73 22 3a 5b 7b 22 74 79 70 65 22 3a 22 6d 65 73 73 61 67 65 22 2c 22 61 74 74 72 69 62 75 74 65 73 22 3a 5b 7b 22 6b 65 79 22 3a 22 61 63 74 69 6f 6e 22 2c 22 76 61 6c 75 65 22 3a 22 2f 63 6f 73 6d 6f 73 2e 67 6f 76 2e 76 31 62 65 74 61 31 2e 4d 73 67 56 6f 74 65 22 7d 2c 7b 22 6b 65 79 22 3a 22 6d 6f 64 75 6c 65 22 2c 22 76 61 6c 75 65 22 3a 22 67 6f 76 65 72 6e 61 6e 63 65 22 7d 2c 7b 22 6b 65 79 22 3a 22 73 65 6e 64 65 72 22 2c 22 76 61 6c 75 65 22 3a 22 74 65 72 72 61 31 61 6c 70 66 36 73 6e 77 32 64 37 36 6b 6b 77 6a 76 33 64 70 34 6c 37 70 63 6c 36 63 6e 39 75 79 74 71 38 39 7a 6b 22 7d 5d 7d 2c 7b 22 74 79 70 65 22 3a 22 70 72 6f 70 6f 73 61 6c 5f 76 6f 74 65 22 2c 22 61 74 74 72 69 62 75 74 65 73 22 3a 5b 7b 22 6b 65 79 22 3a 22 6f 70 74 69 6f 6e 22 2c 22 76 61 6c 75 65 22 3a 22 7b 5c 22 6f 70 74 69 6f 6e 5c 22 3a 31 2c 5c 22 77 65 69 67 68 74 5c 22 3a 5c 22 31 2e 30 30 30 30 30 30 30 30 30 30 30 30 30 30 30 30 30 30 5c 22 7d 22 7d 2c 7b 22 6b 65 79 22 3a 22 70 72 6f 70 6f 73 61 6c 5f 69 64 22 2c 22 76 61 6c 75 65 22 3a 22 31 38 30 22 7d 5d 7d 5d 7d 5d
