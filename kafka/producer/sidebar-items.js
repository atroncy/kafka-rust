initSidebarItems({"constant":[["DEFAULT_ACK_TIMEOUT","The default value for `Builder::with_acks_timeout`."],["DEFAULT_REQUIRED_ACKS","The default value for `Builder::with_required_acks`."]],"enum":[["Compression","Compression types supported by kafka. The numeral values of this enumeration correspond to the compression encoding in the attributes of a Message in the protocol."]],"struct":[["Builder","A Kafka Producer builder easing the process of setting up various configuration settings."],["DefaultPartitioner","As its name implies `DefaultPartitioner` is the default partitioner for `Producer`."],["Partitions","Producer relevant partition information of a particular topic."],["Producer","The Kafka Producer"],["Record","A structure representing a message to be sent to Kafka through the `Producer` API.  Such a message is basically a key/value pair specifying the target topic and optionally the topic's partition."],["Topics","A description of available topics and their available partitions."]],"trait":[["AsBytes","A trait used by `Producer` to obtain the bytes `Record::key` and `Record::value` represent.  This leaves the choice of the types for `key` and `value` with the client."],["Partitioner","A partitioner is given a chance to choose/redefine a partition for a message to be sent to Kafka.  See also `Record#with_partition`."]]});