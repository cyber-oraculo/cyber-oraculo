const questions = [
    {
        "question": "Refer to the exhibit.\nTraffic sourced from the loopback0 Interface is trying to connect via ssh to the host at 10.0.1.15. What Is the next hop to the destination address?",
        "options": [
            " 192.168.0.7",
            " 192.168.0.4",
            " 192.168.0.40",
            " 192.168.3.5"
        ],
        "answer": 1
    },
    {
        "question": "Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 3",
            "(Topic 3)",
            "fer to the exhibit.",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " engineer is configuring an EtherChannel using LACP between Switches 1 and 2 Which configuration must be applied so that only Switch 1 sends LACP",
            "itiation packets?",
            " Switch 1 (config-if)#channel-group 1 mode on Swrtch2(config-if)#channel-group 1 mode passive",
            " Switch1(config-if)#channel-group 1 mode passive Switch2(config-if)#channel-group 1 mode active",
            " Switch1{config-if)\u00a3channel-group 1 mode active Switch2(config-if)#channel-group 1 mode passive",
            " Switch1(config-if)#channel-group 1 mode on Switch2(config-if)#channel-group 1 mode active"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nAn engineer assumes a configuration task from a peer Router A must establish an OSPF neighbor relationship with neighbor 172 1 1 1 The output displays the\nstatus of the adjacency after 2 hours. What is the next step in the configuration process for the routers to establish an adjacency?",
        "options": [
            " Configure router A to use the same MTU size as router B.",
            " Set the router B OSPF ID to a nonhost address.",
            " Configure a point-to-point link between router A and router B.",
            " Set the router B OSPF ID to the same value as its IP address"
        ],
        "answer": 1
    },
    {
        "question": "Which protocol is used for secure remote CLI access?",
        "options": [
            " HTTPS",
            " HTTP",
            " Telnet",
            " SSH"
        ],
        "answer": 3
    },
    {
        "question": "A network engineer must configure two new subnets using the address block 10 70 128 0/19 to meet these requirements:\n\u2022 The first subnet must support 24 hosts\n\u2022 The second subnet must support 472 hosts\n\u2022 Both subnets must use the longest subnet mask possible from the address block Which two configurations must be used to configure the new subnets and meet\na\nrequirement to use the first available address in each subnet for the router interfaces? (Choose two )",
        "options": [
            " interface vlan 1234ip address 10.70.159.1 255.255.254.0",
            " interface vlan 1148ip address 10.70.148.1 255.255.254.0",
            " interface vlan 4722ip address 10.70.133.17 255.255.255.192",
            " interface vlan 3002ip address 10.70.147.17 255.255.255.224",
            " interface vlan 155ip address 10.70.155.65 255.255.255.224"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nSite A was recently connected to site B over a new single-mode fiber path. Users at site A report Intermittent connectivity Issues with applications hosted at site B.\nWhat is the reason for the problem?",
        "options": [
            " Heavy usage is causing high latency.",
            " An incorrect type of transceiver has been inserted into a device on the link.",
            " physical network errors are being transmitted between the two sites.",
            " The wrong cable type was used to make the connection."
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nUsers on existing VLAN 100 can reach sites on the Internet. Which action must the administrator take to establish connectivity to the Internet for users in VLAN\n200?",
        "options": [
            " Define a NAT pool on the router.",
            " Configure static NAT translations for VLAN 200.",
            " Configure the ip nat outside command on another interface for VLAN 200.",
            " Update the NAT INSIDF RANGFS ACL"
        ],
        "answer": 1
    },
    {
        "question": "How does Rapid PVST+ create a fast loop-free network topology?",
        "options": [
            " lt requires multiple links between core switches",
            " It generates one spanning-tree instance for each VLAN",
            " It maps multiple VLANs into the same spanning-tree instance",
            " It uses multiple active paths between end stations.",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nWhich network prefix was learned via EIGRP?",
        "options": [
            " 172.16.0.0/16",
            " 192.168.2.0/24",
            " 207.165.200.0/24",
            " 192.168.1.0/24"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nR1 learns all routes via OSPF Which command configures a backup static route on R1 to reach the 192 168.20.0/24 network via R3?",
        "options": [
            " R1(config)#ip route 192.168.20.0 255.255.0.0 192.168.30.2",
            " R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2 90",
            " R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2 111",
            " R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2"
        ],
        "answer": 2
    },
    {
        "question": "What is the difference between IPv6 unicast and anycast addressing?",
        "options": [
            " IPv6 anycast nodes must be explicitly configured to recognize the anycast address, but IPv6 unicast nodes require no special configuration",
            " IPv6 unicast nodes must be explicitly configured to recognize the unicast address, but IPv6 anycast nodes require no special configuration",
            " An individual IPv6 unicast address is supported on a single interface on one node but an IPv6 anycast address is assigned to a group of interfaces on multiple",
            "des.",
            " Unlike an IPv6 anycast address, an IPv6 unicast address is assigned to a group of interfaces on multiple nodes"
        ],
        "answer": 2
    },
    {
        "question": "Drag and drop the facts about wireless architectures from the left onto the types of access point on the right. Not all options are used.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 22",
            "(Topic 3)",
            "ich type of IPv6 address is similar to a unicast address but is assigned to multiple devices on the same network at the same time?",
            " global unicast address",
            " anycast address",
            " multicast address",
            " link-local address"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nWhich plan must be Implemented to ensure optimal QoS marking practices on this network?",
        "options": [
            " As traffic traverses MLS1 remark the traffic, but trust all markings at the access layer.",
            " Trust the IP phone markings on SW1 and mark traffic entering SW2 at SW2.",
            " Remark traffic as it traverses R1 and trust all markings at the access layer.",
            " As traffic enters from the access layer on SW1 and SW2. trust all traffic markings."
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nWhich configuration enables DHCP addressing for hosts connected to interface FastEthernetO/1 on router R4?",
        "options": [
            " interface FastEthernet0/0 ip helper-address 10.0.1.1iaccess-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1",
            " interface FastEthernot0/1 ip helper-address 10.0.1.1!access-list 100 permit tcp host 10.0.1.1 eq 67 host 10.148.2.1",
            " interface FastEthernetO/0 ip helper-address 10.0.1.1Iaccess-list 100 permit host 10.0.1.1 host 10.148.2.1 eq bootps",
            " interface FastEthernet0/1 ip helper-address 10.0.1.1!access-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1"
        ],
        "answer": 1
    },
    {
        "question": "What role does a hypervisor provide for each virtual machine in server virtualization?",
        "options": [
            " infrastructure-as-a-service.",
            " Software-as-a-service",
            " control and distribution of physical resources",
            " services as a hardware controller."
        ],
        "answer": 2
    },
    {
        "question": "Which type of IPv6 address is publicly routable in the same way as IPv4 public address?",
        "options": [
            " global unicast",
            " link-local",
            " unique local",
            " multicast"
        ],
        "answer": 0
    },
    {
        "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhat is the primary different between AAA authentication and authorization?",
        "options": [
            " Authentication verifies a username and password, and authorization handles the communication between the authentication agent and the user database.",
            " Authentication identifies a user who is attempting to access a system, and authorization validates the users password",
            " Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user can perform.",
            " Authentication controls the system processes a user can access and authorization logs the activities the user initiates"
        ],
        "answer": 2
    },
    {
        "question": "Which networking function occurs on the data plane?",
        "options": [
            " forwarding remote client/server traffic",
            " facilitates spanning-tree elections",
            " processing inbound SSH management traffic",
            " sending and receiving OSPF Hello packets"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nWhich route type is configured to reach the internet?",
        "options": [
            " host route",
            " default route",
            " floating static route",
            " network route"
        ],
        "answer": 1
    },
    {
        "question": "An engineer is configuring NAT to translate the source subnet of 10.10.0.0/24 to any of three addresses 192.168.30.1, 192.168.3.2, 192.168.3.3 Which\nconfiguration should be used?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "Which two protocols must be disabled to increase security for management connections to a Wireless LAN Controller? (Choose two )",
        "options": [
            " Telnet",
            " SSH",
            " HTTP",
            " HTTPS",
            " TFTP"
        ],
        "answer": 0
    },
    {
        "question": "What is a similarly between 1000BASE-LX and 1000BASE-T standards?",
        "options": [
            " Both use the same data-link header and trailer formats",
            " Both cable types support LP connectors",
            " Both cable types support Rj-45 connectors",
            " Both support up to 550 meters between nodes"
        ],
        "answer": 0
    },
    {
        "question": "Drag the descriptions of device management from the left onto the types of device management on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 62",
            "(Topic 2)",
            "fer to the exhibit.",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "sed on the LACP neighbor status, in which mode is the SW1 port channel configured?",
            " passive",
            " mode on",
            " auto",
            " active"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nRouter R1 is running three different routing protocols. Which route characteristic is used by the router to forward the packet that it receives for destination IP\n172.16.32.1?",
        "options": [
            " longest prefix",
            " metric",
            " cost",
            " administrative distance"
        ],
        "answer": 0
    },
    {
        "question": "An engineer requires a scratch interface to actively attempt to establish a trunk link with a neighbor switch. What command must be configured?",
        "options": [
            " switchport mode trunk",
            " switchport mode dynamic desirable",
            " switchport mode dynamic auto",
            " switchport nonegotiate"
        ],
        "answer": 2
    },
    {
        "question": "Drag and drop the application protocols from the left onto the transport protocols that it uses on the right\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 75",
            "(Topic 2)",
            "ich command must be entered to configure a DHCP relay?",
            " ip helper-address",
            " ip address dhcp",
            " ip dhcp pool",
            " ip dhcp relay"
        ],
        "answer": 0
    },
    {
        "question": "Which function is performed by DHCP snooping?",
        "options": [
            " propagates VLAN information between switches",
            " listens to multicast traffic for packet forwarding",
            " provides DDoS mitigation",
            " rate-limits certain traffic"
        ],
        "answer": 0
    },
    {
        "question": "Which design element is a best practice when deploying an 802.11b wireless infrastructure?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " disabling TPC so that access points can negotiate signal levels with their attached wireless devices.",
            " setting the maximum data rate to 54 Mbps on the Cisco Wireless LAN Controller",
            " allocating nonoverlapping channels to access points that are in close physical proximity to one another",
            " configuring access points to provide clients with a maximum of 5 Mbps"
        ],
        "answer": 2
    },
    {
        "question": "What is a role of access points in an enterprise network?",
        "options": [
            " connect wireless devices to a wired network",
            " support secure user logins to devices or the network",
            " integrate with SNMP in preventing DDoS attacks",
            " serve as a first line of defense in an enterprise network"
        ],
        "answer": 0
    },
    {
        "question": "A user configured OSPF in a single area between two routers A serial interface connecting R1 and R2 is running encapsulation PPP By default which OSPF\nnetwork type is seen on this interface when the user types show ip ospf interface on R1 or R2?",
        "options": [
            " port-to-multipoint",
            " broadcast",
            " point-to-point",
            " nonbroadcast"
        ],
        "answer": 2
    },
    {
        "question": "How does WPA3 improve security?",
        "options": [
            " It uses SAE for authentication.",
            " It uses a 4-way handshake for authentication.",
            " It uses RC4 for encryption.",
            " It uses TKIP for encryption."
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nShortly after SiteA was connected to SiteB over a new single-mode fiber path users at SiteA report intermittent connectivity issues with applications hosted at SiteB\nWhat is the cause of the intermittent connectivity issue?",
        "options": [
            " Interface errors are incrementing",
            " An incorrect SFP media type was used at SiteA",
            " High usage is causing high latency",
            " The sites were connected with the wrong cable type"
        ],
        "answer": 0
    },
    {
        "question": "What is a function of TFTP in network operations?",
        "options": [
            " transfers a backup configuration file from a server to a switch using a username and password",
            " transfers files between file systems on a router",
            " transfers a configuration files from a server to a router on a congested link",
            " transfers IOS images from a server to a router for firmware upgrades"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nThe New York router is configured with static routes pointing to the Atlanta and Washington sites. Which two tasks must be performed so that the Serial0/0/0\ninterfaces on the Atlanta and Washington routers can reach one another?\n(Choose two.)",
        "options": [
            " Configure the ipv6 route 2012::/126 2023::1 command on the Washington router.",
            " Configure the ipv6 route 2023::/126 2012::1 command on the Atlanta router.",
            " Configure the Ipv6 route 2012::/126 s0/0/0 command on the Atlanta router.",
            " Configure the ipv6 route 2023::/126 2012::2 command on the Atlanta router.",
            " Configure the ipv6 route 2012::/126 2023::2 command on the Washington router."
        ],
        "answer": 3
    },
    {
        "question": "What prevents a workstation from receiving a DHCP address?",
        "options": [
            " DTP",
            " STP",
            " VTP",
            " 802.10"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nA network engineer is in the process of establishing IP connectivity between two sites. Routers R1 and R2 are partially configured with IP addressing. Both routers\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nhave the ability to access devices on their respective LANs. Which command set configures the IP connectivity between devices located on both LANs in each\nsite?",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nA network engineer must block access for all computers on VLAN 20 to the web server via HTTP All other computers must be able to access the web server\nWhich configuration when applied to switch A accomplishes this task?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "What is the effect when loopback interfaces and the configured router ID are absent during the OSPF Process configuration?",
        "options": [
            " No router ID is set, and the OSPF protocol does not run.",
            " The highest up/up physical interface IP address is selected as the router ID.",
            " The lowest IP address is incremented by 1 and selected as the router ID.",
            " The router ID 0.0.0.0 is selected and placed in the OSPF process."
        ],
        "answer": 1
    },
    {
        "question": "R1 has learned route 10.10.10.0/24 via numerous routing protocols. Which route is installed?",
        "options": [
            " route with the lowest cost",
            " route with the next hop that has the highest IP",
            " route with the shortest prefix length",
            " route with the lowest administrative distance"
        ],
        "answer": 3
    },
    {
        "question": "When deploying syslog, which severity level logs informational message?",
        "options": [
            " 2",
            " 4",
            " 6",
            "swer: D",
            "planation:",
            "tps://en.wikipedia.org/wiki/Syslog",
            "W QUESTION 125",
            "(Topic 2)",
            "ich type of traffic is sent with pure iPsec?",
            " broadcast packets from a switch that is attempting to locate a MAC address at one of several remote sites",
            " multicast traffic from a server at one site to hosts at another location",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " spanning-tree updates between switches that are at two different sites",
            " unicast messages from a host at a remote site to a server at headquarters"
        ],
        "answer": 3
    },
    {
        "question": "An engineer must configure traffic for a VLAN that is untagged by the switch as it crosses a trunk link. Which command should be used?",
        "options": [
            " switchport trunk allowed vlan 10",
            " switchport trunk native vlan 10",
            " switchport mode trunk",
            " switchport trunk encapsulation dot1q"
        ],
        "answer": 1
    },
    {
        "question": "With REST API, which standard HTTP header tells a server which media type is expected by the client?",
        "options": [
            " Accept-Encoding: gzi",
            " deflate",
            " Accept-Patch: text/example; charset=utf-8",
            " Content-Type: application/json; charset=utf-8",
            " Accept: application/json"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit. An engineer must add a subnet for a new office that will add 20 users to the network. Which IPv4 network and subnet mask combination does\nthe engineer assign to minimize wasting addresses?",
        "options": [
            " 10.10.225.48 255.255.255.240",
            " 10.10.225.32 255.255.255.240",
            " 10.10.225.48 255.255.255.224",
            " 10.10.225.32 255.255.255.224"
        ],
        "answer": 3
    },
    {
        "question": "A network engineer must create a diagram of a multivendor network. Which command must be configured on the Cisco devices so that the topology of the network\ncan be mapped?",
        "options": [
            " Device(Config)#lldp run",
            " Device(Config)#cdp run",
            " Device(Config-if)#cdp enable",
            " Device(Config)#flow-sampler-map topology"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nRouter R1 Fa0/0 is unable ping router R3 Fa0/1.\nWhich action must be taken in router R1 to help resolve the configuration issue?",
        "options": [
            " set the default network as 20.20.20.0/24",
            " set the default gateway as 20.20.20.2",
            " configure a static route with Fa0/1 as the egress interface to reach the 20.20.20.0/24 network",
            " configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0/24 network"
        ],
        "answer": 3
    },
    {
        "question": "An administrator must secure the WLC from receiving spoofed association requests. Which steps must be taken to configure the WLC to restrict the requests and\nforce the user to wait 10 ms to retry an association request?",
        "options": [
            " Enable Security Association Teardown Protection and set the SA Query timeout to 10",
            " Enable MAC filtering and set the SA Query timeout to 10",
            " Enable 802.1x Layer 2 security and set me Comeback timer to 10",
            " Enable the Protected Management Frame service and set the Comeback timer to 10"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nWhat action establishes the OSPF neighbor relationship without forming an adjacency?",
        "options": [
            " modify hello interval",
            " modify process ID",
            " modify priority",
            " modify network type"
        ],
        "answer": 0
    },
    {
        "question": "Which 802.11 frame type is indicated by a probe response after a client sends a probe request?",
        "options": [
            " action",
            " management",
            " control",
            " data"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nBetween which zones do wireless users expect to experience intermittent connectivity?",
        "options": [
            " between zones 1 and 2",
            " between zones 2 and 5",
            " between zones 3 and 4",
            " between zones 3 and 6"
        ],
        "answer": 3
    },
    {
        "question": "What Is the path for traffic sent from one user workstation to another workstation on a separate switch In a Ihree-lter architecture model?",
        "options": [
            " access - core - distribution - access",
            " access - distribution - distribution - access",
            " access - core - access",
            " access -distribution - core - distribution - access"
        ],
        "answer": 3
    },
    {
        "question": "Which technology must be implemented to configure network device monitoring with the highest security?",
        "options": [
            " IP SLA",
            " syslog",
            " NetFlow",
            " SNMPv3"
        ],
        "answer": 2
    },
    {
        "question": "Where is the interface between the control plane and data plane within the software- defined architecture?",
        "options": [
            " control layer and the infrastructure layer",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " application layer and the infrastructure layer",
            " application layer and the management layer",
            " control layer and the application layer"
        ],
        "answer": 0
    },
    {
        "question": "A router running EIGRP has learned the same route from two different paths. Which parameter does the router use to select the best path?",
        "options": [
            " cost",
            " adminstrative distance",
            " metric",
            " as-path"
        ],
        "answer": 2
    },
    {
        "question": "Which JSON data type is an unordered set of attribute- value pairs?",
        "options": [
            " array",
            " string",
            " object",
            " Boolean"
        ],
        "answer": 2
    },
    {
        "question": "What are two characteristics of a controller-based network? (Choose two)",
        "options": [
            " The administrator can make configuration updates from the CLI",
            " It uses northbound and southbound APIs to communicate between architectural layers",
            " It moves the control plane to a central point.",
            " It decentralizes the control plane, which allows each device to make its own forwarding decisions",
            " It uses Telnet to report system issues."
        ],
        "answer": 1
    },
    {
        "question": "What is a difference between RADIUS and TACACS+?",
        "options": [
            " RADIUS is most appropriate for dial authentication, but TACACS+ can be used for multiple types of authentication",
            " TACACS+ encrypts only password information and RADIUS encrypts the entire payload",
            " TACACS+ separates authentication and authorization, and RADIUS merges them",
            " RADIUS logs all commands that are entered by the administrator, but TACACS+ logs only start, stop, and interim commands"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nWhat does router R1 use as its OSPF router-ID?",
        "options": [
            " 10.10.1.10",
            " 10.10.10.20",
            " 172.16.15.10",
            " 192.168.0.1"
        ],
        "answer": 2
    },
    {
        "question": "Which two must be met before SSH can operate normally on a Cisco IOS switch? (Choose two)",
        "options": [
            " The switch must be running a k9 (crypto) IOS image",
            " The Ip domain-name command must be configured on the switch",
            " IP routing must be enabled on the switch",
            " A console password must be configured on the switch",
            " Telnet must be disabled on the switch"
        ],
        "answer": 0
    },
    {
        "question": "How do traditional campus device management and Cisco DNA Center device management differ in regards to deployment?",
        "options": [
            " Cisco DNA Center device management can deploy a network more quickly thantraditional campus device management",
            " Traditional campus device management allows a network to scale more quickly than with Cisco DNA Center device management",
            " Cisco DNA Center device management can be implemented at a lower cost than most traditional campus device management options",
            " Traditional campus device management schemes can typically deploy patches and updates more quickly than Cisco DNA Center device management"
        ],
        "answer": 0
    },
    {
        "question": "Which QoS tool is used to optimize voice traffic on a network that is primarily intended for data traffic?",
        "options": [
            " FIFO",
            " WFQ",
            " PQ",
            " WRED"
        ],
        "answer": 2
    },
    {
        "question": "When using Rapid PVST+, which command guarantees the switch is always the root bridge for VLAN 200?",
        "options": [
            " spanning -tree vlan 200 priority 614440",
            " spanning -tree vlan 200 priority 38572422",
            " spanning -tree vlan 200 priority 0",
            " spanning -tree vlan 200 root primary"
        ],
        "answer": 2
    },
    {
        "question": "Why was the RFC 1918 address space defined?",
        "options": [
            " conserve public IPv4 addressing",
            " preserve public IPv6 address space",
            " reduce instances of overlapping IP addresses",
            " support the NAT protocol"
        ],
        "answer": 0
    },
    {
        "question": "Which type of information resides on a DHCP server?",
        "options": [
            " a list of the available IP addresses in a pool",
            " a list of public IP addresses and their corresponding names",
            " usernames and passwords for the end users in a domain",
            " a list of statically assigned MAC addresses"
        ],
        "answer": 0
    },
    {
        "question": "Recommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\n- (Topic 1)\nAfter installing a new Cisco ISE server, which task must the engineer perform on the Cisco WLC to connect wireless clients on a specific VLAN based on their\ncredentials?",
        "options": [
            " Enable the allow AAA Override",
            " Enable the Even: Driven RRM.",
            " Disable the LAG Mode or Next Reboot.",
            " Enable the Authorized MIC APs against auth-list or AAA."
        ],
        "answer": 0
    },
    {
        "question": "Which 802.11 frame type is association response?",
        "options": [
            " management",
            " protected frame",
            " control",
            " action"
        ],
        "answer": 0
    },
    {
        "question": "Which two command sequences must you configure on switch to establish a Layer 3 EtherChannel with an open-standard protocol? (Choose two )",
        "options": [
            " interface GigabitEthernet0/0/1 channel-group 10 mode on",
            " interface GigabitEthernet0/0/1 channel-group 10 mode active",
            " interface GigabitEthernet0/0/1 channel-group 10 mode auto",
            " interface port-channel 10 switchportswitchport mode trunk",
            " interface port-channel 10 no switchportip address 172.16.0.1.255.255.255.0"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nWhich outcome is expected when PC_A sends data to PC_B?",
        "options": [
            " The switch rewrites the source and destination MAC addresses with its own.",
            " The source MAC address is changed.",
            " The source and destination MAC addresses remain the same.",
            " The destination MAC address is replaced with ffff.ffff.ffff."
        ],
        "answer": 2
    },
    {
        "question": "Recommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nDRAG DROP - (Topic 1)\nDrag and drop the threat-mitigation techniques from the left onto the types of threat or attack they mitigate on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "uble-Tagging attack:",
            " this attack, the attacking computer generates frames with two 802.1Q tags. The first tag matches the native VLAN of the trunk port (VLAN 10 in this case), and",
            "e second matches the VLAN of a host it wants to attack (VLAN 20).When the packet from the attacker reaches Switch A, Switch A only sees the first VLAN 10",
            "d it matches with its native VLAN 10 so this VLAN tag is removed. Switch A forwards the frame out all links with the same native VLAN 10. Switch B receives the",
            "ame with an tag of VLAN 20 so it removes this tag and forwards out to the Victim computer.Note: This attack only works if the trunk (between two switches) has",
            "e same native VLAN as the attacker.To mitigate this type of attack, you can use VLAN access control lists (VACLs, which applies to all traffic within a VLAN. We",
            "n use VACL to drop attacker traffic to specific victims/servers) or implement Private VLANs.ARP attack (like ARP poisoning/spoofing) is a type of attack in which",
            "malicious actor sends falsified ARP messages over a local area network as ARP allows a gratuitous reply from a host even if an ARP request was not received.",
            "is results in the linking of an attacker\u2019s MAC address with the IP address of a legitimate computer or server on the network. This is an attack based on ARP",
            "ich is at Layer 2.Dynamic ARP inspection (DAI) is a security feature that validates ARP packets in a network which can be used to mitigate this type of attack.",
            "W QUESTION 208",
            "(Topic 1)",
            "at are two roles of the Dynamic Host Configuration Protocol (DHCP)? (Choose two)",
            " The DHCP server offers the ability to exclude specific IP addresses from a pool of IP addresses",
            " The DHCP client can request up to four DNS server addresses",
            " The DHCP server assigns IP addresses without requiring the client to renew them",
            " The DHCP server leases client IP addresses dynamically.",
            " The DHCP client maintains a pool of IP addresses it can assign."
        ],
        "answer": 0
    },
    {
        "question": "What are network endpoints?",
        "options": [
            " act as routers to connect a user to the service prowler network",
            " a threat to the network if they are compromised",
            " support inter-VLAN connectivity",
            " enforce policies for campus-wide traffic going to the internet"
        ],
        "answer": 1
    },
    {
        "question": "Which statement identifies the functionality of virtual machines?",
        "options": [
            " Virtualized servers run most efficiently when they are physically connected to a switch that is separate from the hypervisor",
            " The hypervisor can virtualize physical components including CP",
            " memory, and storage",
            " Each hypervisor can support a single virtual machine and a single software switch",
            " The hypervisor communicates on Layer 3 without the need for additional resources"
        ],
        "answer": 1
    },
    {
        "question": "Recommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\n- (Topic 1)\nIn QoS, which prioritization method is appropriate for interactive voice and video?",
        "options": [
            " expedited forwarding",
            " traffic policing",
            " round-robin scheduling",
            " low-latency queuing"
        ],
        "answer": 3
    },
    {
        "question": "How do TCP and UDP differ in the way they provide reliability for delivery of packets?",
        "options": [
            " TCP is a connectionless protocol that does not provide reliable delivery of data, UDP is a connection-oriented protocol that uses sequencing to provide reliable",
            "livery.",
            " TCP does not guarantee delivery or error checking to ensure that there is no corruption of data UDP provides message acknowledgement and retransmits data",
            " lost.",
            " TCP provides flow control to avoid overwhelming a receiver by sending too many packets at once, UDP sends packets to the receiver in a continuous stream",
            "thout checking for sequencing",
            " TCP uses windowing to deliver packets reliably; UDP provides reliable message transfer between hosts by establishing a three-way handshake"
        ],
        "answer": 2
    },
    {
        "question": "What describes the operation of virtual machines?",
        "options": [
            " Virtual machines are responsible for managing and allocating host hardware resources",
            " In a virtual machine environment, physical servers must run one operating system at a time.",
            " Virtual machines are the physical hardware that support a virtual environment.",
            " Virtual machines are operating system instances that are decoupled from server hardware"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nWhich password must an engineer use to enter the enable mode?",
        "options": [
            " adminadmin123",
            " default",
            " testing 1234",
            " cisco123"
        ],
        "answer": 2
    },
    {
        "question": "Drag drop the descriptions from the left onto the correct configuration-management technologies on the right.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "e focus of Ansible is to be streamlined and fast, and to require no node agent installation.",
            "us, Ansible performs all functions over SSH. Ansible is built on Python, in contrast to the Ruby foundation of Puppet and Chef.",
            "P port 10002 is the command port. It may be configured in the Chef Push Jobs configuration file .",
            "is port allows Chef Push Jobs clients to communicate with the Chef Push Jobs server. Puppet is an open-source configuration management solution, which is",
            "ilt with Ruby and offers custom Domain Specific Language (DSL) and Embedded Ruby (ERB) templates to create custom Puppet language files, offering a",
            "clarative-paradigm programming approach.",
            "Puppet piece of code is called a manifest, and is a file with .pp extension.",
            "W QUESTION 242",
            "(Topic 1)",
            "ich virtual MAC address is used by VRRP group 1?",
            " 0050.0c05.ad81",
            " 0007.c061.bc01",
            " 0000.5E00.0101",
            " 0500.3976.6401"
        ],
        "answer": 2
    },
    {
        "question": "in Which way does a spine and-leaf architecture allow for scalability in a network when additional access ports are required?",
        "options": [
            " A spine switch and a leaf switch can be added with redundant connections between them",
            " A spine switch can be added with at least 40 GB uplinks",
            " A leaf switch can be added with a single connection to a core spine switch.",
            " A leaf switch can be added with connections to every spine switch"
        ],
        "answer": 3
    },
    {
        "question": "What is a characteristic of cloud-based network topology?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " wireless connections provide the sole access method to services",
            " onsite network services are provided with physical Layer 2 and Layer 3 components",
            " services are provided by a public, private, or hybrid deployment",
            " physical workstations are configured to share resources"
        ],
        "answer": 0
    },
    {
        "question": "Which CRUD operation corresponds to the HTTP GET method?",
        "options": [
            " read",
            " update",
            " create",
            " delete"
        ],
        "answer": 0
    },
    {
        "question": "What is a benefit of using a Cisco Wireless LAN Controller?",
        "options": [
            " Central AP management requires more complex configurations",
            " Unique SSIDs cannot use the same authentication method",
            " It supports autonomous and lightweight APs",
            " It eliminates the need to configure each access point individually"
        ],
        "answer": 3
    },
    {
        "question": "Drag and drop the descriptions of file-transfer protocols from the left onto the correct protocols on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "W QUESTION 257",
            "(Topic 1)",
            "w are the switches in a spine-and-leaf topology interconnected?",
            " Each leaf switch is connected to one of the spine switches.",
            " Each leaf switch is connected to two spine switches, making a loop.",
            " Each leaf switch is connected to each spine switch.",
            " Each leaf switch is connected to a central leaf switch, then uplinked to a core spine switch."
        ],
        "answer": 1
    },
    {
        "question": "Which type of wireless encryption is used for WPA2 in preshared key mode?",
        "options": [
            " TKIP with RC4",
            " RC4",
            " AES-128",
            " AES-256"
        ],
        "answer": 3
    },
    {
        "question": "What is an advantage of Cisco DNA Center versus traditional campus device management?",
        "options": [
            " It supports numerous extensibility options including cross-domain adapters and third- party SDKs.",
            " It supports high availability for management functions when operating in cluster mode.",
            " It enables easy autodiscovery of network elements m a brownfield deployment.",
            " It is designed primarily to provide network assurance."
        ],
        "answer": 0
    },
    {
        "question": "What occurs to frames during the process of frame flooding?",
        "options": [
            " Frames are sent to every port on the switch in the same VLAN except from the originating port",
            " Frames are sent to every port on the switch that has a matching entry in the MAC address table.",
            " Frames are sent to all ports, including those that are assigned to other VLANs.",
            " Frames are sent to every port on the switch in the same VLAN."
        ],
        "answer": 0
    },
    {
        "question": "Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?",
        "options": [
            " on",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " auto",
            " active",
            " desirable"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nIf the network environment is operating normally, which type of device must be connected to interface FastEthernet 0/1?",
        "options": [
            " DHCP client",
            " access point",
            " router",
            " PC"
        ],
        "answer": 2
    },
    {
        "question": "What is recommended for the wireless infrastructure design of an organization?",
        "options": [
            " group access points together to increase throughput on a given channel",
            " configure the first three access points are configured to use Channels 1, 6, and 11",
            " include a least two access points on nonoverlapping channels to support load balancing",
            " assign physically adjacent access points to the same Wi-Fi channel"
        ],
        "answer": 1
    },
    {
        "question": "How does a switch process a frame received on Fa0/1 with the destination MAC address of 0e38.7363.657b when the table is missing the address?",
        "options": [
            " lt drops the frame immediately.",
            " It forwards the frame back out of interface Fa0/1.",
            " It floods the frame to all interfaces except Fa0/1.",
            " It holds the frame until the MAC address timer expires and then drops the frame."
        ],
        "answer": 2
    },
    {
        "question": "Which WAN topology provides a combination of simplicity quality, and availability?",
        "options": [
            " partial mesh",
            " full mesh",
            " point-to-point",
            " hub-and-spoke"
        ],
        "answer": 2
    },
    {
        "question": "Which function is performed by the collapsed core layer in a two-tier architecture?",
        "options": [
            " enforcing routing policies",
            " marking interesting traffic for data polices",
            " attaching users to the edge of the network",
            " applying security policies"
        ],
        "answer": 0
    },
    {
        "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhat is an appropriate use for private IPv4 addressing?",
        "options": [
            " on the public-facing interface of a firewall",
            " to allow hosts inside to communicate in both directions with hosts outside the organization",
            " on internal hosts that stream data solely to external resources",
            " on hosts that communicates only with other internal hosts"
        ],
        "answer": 3
    },
    {
        "question": "Which action does the router take as it forwards a packet through the network?",
        "options": [
            " The router replaces the original source and destination MAC addresses with the sending router MAC address as the source and neighbor MAC address as the",
            "stination",
            " The router encapsulates the original packet and then includes a tag that identifies the source router MAC address and transmits it transparently to the",
            "stination",
            " The router encapsulates the source and destination IP addresses with the sending router IP address as the source and the neighbor IP address as the",
            "stination",
            " The router replaces the source and destination labels with the sending router interface label as a source and the next hop router label as a destination"
        ],
        "answer": 0
    },
    {
        "question": "When a floating static route is configured, which action ensures that the backup route is used when the primary route fails?",
        "options": [
            " The floating static route must have a higher administrative distance than the primary route so it is used as a backup",
            " The administrative distance must be higher on the primary route so that the backup route becomes secondary.",
            " The floating static route must have a lower administrative distance than the primary route so it is used as a backup",
            " The default-information originate command must be configured for the route to be installed into the routing table"
        ],
        "answer": 0
    },
    {
        "question": "What is a difference between local AP mode and FiexConnet AP mode?",
        "options": [
            " Local AP mode creates two CAPWAP tunnels per AP to the WLC",
            " FiexConnect AP mode fails to function if the AP loses connectivity with the WLC",
            " FlexConnect AP mode bridges the traffic from the AP to the WLC when local switching is configured",
            " Local AP mode causes the AP to behave as if it were an autonomous AP"
        ],
        "answer": 0
    },
    {
        "question": "In which situation is private IPv4 addressing appropriate for a new subnet on the network of an organization?",
        "options": [
            " There is limited unique address space, and traffic on the new subnet will stay local within the organization.",
            " The network has multiple endpoint listeners, and it is desired to limit the number of broadcasts.",
            " Traffic on the subnet must traverse a site-to-site VPN to an outside organization.",
            " The ISP requires the new subnet to be advertised to the internet for web services."
        ],
        "answer": 0
    },
    {
        "question": "How will Link Aggregation be Implemented on a Cisco Wireless LAN Controller?",
        "options": [
            " One functional physical port is needed to pass client traffic.",
            " The EthernetChannel must be configured in \"mode active\".",
            " When enabled, the WLC bandwidth drops to 500 Mbps.",
            " To pass client traffic, two or more ports must be configured."
        ],
        "answer": 0
    },
    {
        "question": "Which MAC address is recognized as a VRRP virtual address?",
        "options": [
            " 0000.5E00.010a",
            " 0005.3711.0975",
            " 0000.0C07.AC99",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " 0007.C070/AB01"
        ],
        "answer": 0
    },
    {
        "question": "What are two roles of Domain Name Services (DNS)? (Choose Two)",
        "options": [
            " builds a flat structure of DNS names for more efficient IP operations",
            " encrypts network Traffic as it travels across a WAN by default",
            " improves security by protecting IP addresses under Fully Qualified Domain Names (FQDNs)",
            " enables applications to identify resources by name instead of IP address",
            " allows a single host name to be shared across more than one IP address"
        ],
        "answer": 3
    },
    {
        "question": "An engineer must configure the IPv6 address 2001:0db8:0000:0000:0700:0003:400F:572B on the serial0/0 interface of the HQ router and wants to compress it for\neasier configuration. Which command must be issued on the router interface?",
        "options": [
            " ipv6 address 2001:db8::700:3:400F:572B",
            " ipv6 address 2001:db8:0::700:3:4F:572B",
            " ipv6 address 2001:Odb8::7:3:4F:572B",
            " ipv6 address 2001::db8:0000::700:3:400F:572B"
        ],
        "answer": 0
    },
    {
        "question": "Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (choose two.)",
        "options": [
            " 5GHz provides increased network capacity with up to 23 nonoveriapping channels.",
            " For maximum throughput, the WLC is configured to dynamically set adjacent access points to the same channel.",
            " 5GHz channel selection requires an autonomous access point.",
            " Adjacent cells with overlapping channels use a repeater access point.",
            " Cells that overlap one another are configured to use nonoveriapping channels."
        ],
        "answer": 1
    },
    {
        "question": "What are two characteristics of the distribution layer in a three-tier network architecture? (Choose two.)",
        "options": [
            " serves as the network aggregation point",
            " provides a boundary between Layer 2 and Layer 3 communications",
            " designed to meet continuous, redundant uptime requirements",
            " is the backbone for the network topology",
            " physical connection point for a LAN printer"
        ],
        "answer": 1
    },
    {
        "question": "Which level of severity must be set to get informational syslogs?",
        "options": [
            " alert",
            " critical",
            " notice",
            " debug"
        ],
        "answer": 2
    },
    {
        "question": "What is the maximum bandwidth of a T1 point-to-point connection?",
        "options": [
            " 1.544 Mbps",
            " 2.048 Mbps",
            " 34.368 Mbps",
            " 43.7 Mbps"
        ],
        "answer": 0
    },
    {
        "question": "Which command enables a router to become a DHCP client?",
        "options": [
            " ip address dhcp",
            " ip helper-address",
            " ip dhcp pool",
            " ip dhcp client"
        ],
        "answer": 0
    },
    {
        "question": "An engineer is configuring an encrypted password for the enable command on a router\nwhere the local user database has already been configured Drag and drop the configuration commands from the left into the correct sequence on the right Not all\ncommands are used",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 329",
            "(Topic 1)",
            "ich two components are needed to create an Ansible script that configures a VLAN on a switch? (Choose two.)",
            " cookbook",
            " task",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " playbook",
            " model",
            " recipe"
        ],
        "answer": 2
    },
    {
        "question": "In which two ways does a password manager reduce the chance of a hacker stealing a users password? (Choose two.)",
        "options": [
            " It automatically provides a second authentication factor that is unknown to the original user.",
            " It uses an internal firewall to protect the password repository from unauthorized access.",
            " It protects against keystroke logging on a compromised device or web site.",
            " It stores the password repository on the local workstation with built-in antivirus and anti- malware functionality",
            " It encourages users to create stronger passwords."
        ],
        "answer": 2
    },
    {
        "question": "An email user has been lured into clicking a link in an email sent by their company's security organization. The webpage that opens reports that it was safe but the\nlink could have contained malicious code. Which type of security program is in place?",
        "options": [
            " Physical access control",
            " Social engineering attack",
            " brute force attack",
            " user awareness"
        ],
        "answer": 3
    },
    {
        "question": "Which output displays a JSON data representation?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "Drag and drop the IPv6 address type characteristics from the left to the right.",
        "options": [
            " Mastered",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 344",
            "(Topic 1)",
            "ich protocol does an IPv4 host use to obtain a dynamically assigned IP address?",
            " ARP",
            " DHCP",
            " CDP",
            " DNS"
        ],
        "answer": 1
    },
    {
        "question": "Drag and drop the SNMP manager and agent identifier commands from the left onto the functions on the right",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "W QUESTION 351",
            "(Topic 1)",
            "at event has occurred if a router sends a notice level message to a syslog server?",
            " A TCP connection has been torn down",
            " An ICMP connection has been built",
            " An interface line has changed status",
            " A certificate has expired."
        ],
        "answer": 2
    },
    {
        "question": "Which function does the range of private IPv4 addresses perform?",
        "options": [
            " allows multiple companies to each use the same addresses without conflicts",
            " provides a direct connection for hosts from outside of the enterprise network",
            " ensures that NAT is not required to reach the internet with private range addressing",
            " enables secure communications to the internet for all external hosts"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nPC1 is trying to ping PC3 for the first time and sends out an ARP to S1 Which action is taken by S1?",
        "options": [
            " It forwards it out G0/3 only",
            " It is flooded out every port except G0/0.",
            " It drops the frame.",
            " It forwards it out interface G0/2 only."
        ],
        "answer": 1
    },
    {
        "question": "Which configuration ensures that the switch is always the root for VLAN 750?",
        "options": [
            " Switch(config)#spanning-tree vlan 750 priority 38003685",
            " Switch(config)#spanning-tree vlan 750 root primary",
            " Switch(config)#spanning-tree vlan 750 priority 614440",
            " Switch(config)#spanning-tree vlan 750 priority 0"
        ],
        "answer": 3
    },
    {
        "question": "Which HTTP status code is returned after a successful REST API request?",
        "options": [
            " 200",
            " 301",
            " 404",
            " 500"
        ],
        "answer": 0
    },
    {
        "question": "Recommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\n- (Topic 1)\nRefer to the exhibit.\nWhich two commands, when configured on router R1, fulfill these requirements? (Choose two.)\nPackets towards the entire network 2001:db8:2::/64 must be forwarded through router R2. Packets toward host 2001:db8:23::14 preferably must be forwarded\nthrough R3.",
        "options": [
            " Ipv6 route 2001:db8:23::/128 fd00:12::2",
            " Ipv6 route 2001:db8:23::14/128 fd00:13::3",
            " Ipv6 route 2001:db8:23::14/64 fd00:12::2",
            " Ipv6 route 2001:db8:23::/64 fd00:12::2",
            " Ipv6 route 2001:db8:23::14/64 fd00:12::2 200"
        ],
        "answer": 3
    },
    {
        "question": "Drag and drop the 802.11 wireless standards from the left onto the matching statements on the right",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 368",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "(Topic 1)",
            "ich two actions are performed by the Weighted Random Early Detection mechanism? (Choose two)",
            " It drops lower-priority packets before it drops higher-priority packets",
            " It can identify different flows with a high level of granularity",
            " It guarantees the delivery of high-priority packets",
            " It can mitigate congestion by preventing the queue from filling up",
            " it supports protocol discovery"
        ],
        "answer": 0
    },
    {
        "question": "Which type of address is the public IP address of a NAT device?",
        "options": [
            " outside global",
            " outsdwde local",
            " inside global",
            " insride local",
            " outside public",
            " inside public"
        ],
        "answer": 2
    },
    {
        "question": "Which device tracks the state of active connections in order to make a decision to forward a packet through?",
        "options": [
            " wireless access point",
            " firewall",
            " wireless LAN controller",
            " router"
        ],
        "answer": 1
    },
    {
        "question": "Drag and drop the attack-mitigation techniques from the left onto the Types of attack that they mitigate on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "swer: A",
            "planation:",
            "W QUESTION 381",
            "(Topic 1)",
            "en implementing a router as a DHCP server, which two features must be configured'? (Choose two)",
            " relay agent information",
            " database agent",
            " address pool",
            " smart-relay",
            " manual bindings"
        ],
        "answer": 2
    },
    {
        "question": "What causes a port to be placed in the err-disabled state?",
        "options": [
            " latency",
            " port security violation",
            " shutdown command issued on the port",
            " nothing plugged into the port"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nWhich configuration on RTR-1 denies SSH access from PC-1 to any RTR-1 interface and allows all other traffic?",
        "options": [
            " access-list 100 deny tcp host 172.16.1.33 any eq 22 access-list 100 permit ip any any interface GigabitEthernet0/0 ip access-group 100 in",
            " access-list 100 deny tcp host 172.16.1.33 any eq 22 access-list 100 permit ip any any line vty 0 15 ip access-group 100 in",
            " access-list 100 deny tcp host 172.16.1.33 any eq 23 access-list 100 permit ip any any interface GigabitEthernet0/0 ip access-group 100 in",
            " access-list 100 deny tcp host 172.16.1.33 any eq 23 access-list 100 permit ip any any line vty 0 15 ip access-group 100 in"
        ],
        "answer": 1
    },
    {
        "question": "Drag and drop the statement about networking from the left into the Corresponding networking types on the right. Not all statements are used.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 397",
            "AG DROP - (Topic 1)",
            "ag and drop the functions from the left onto the correct network components on the right",
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "W QUESTION 402",
            "(Topic 1)",
            "fer to the exhibit.",
            "network administrator must permit SSH access to remotely manage routers in a network. The operations team resides on the 10.20.1.0/25 network. Which",
            "mmand will accomplish this task?",
            " access-list 2699 permit udp 10.20.1.0 0.0.0.255",
            " no access-list 2699 deny tcp any 10.20.1.0 0.0.0.127 eq 22",
            " access-list 2699 permit tcp any 10.20.1.0 0.0.0.255 eq 22",
            " no access-list 2699 deny ip any 10.20.1.0 0.0.0.255"
        ],
        "answer": 3
    },
    {
        "question": "Configure IPv4 and IPv6 connectivity between two routers. For IPv4, use a /28 network from the 192.168.1.0/24 private range. For IPv6, use the first /64 subnet\nfrom the 2001:0db8:aaaa::/48 subnet.\n* 1. Using Ethernet0/1 on routers R1 and R2, configure the next usable/28 from the 192.168.1.0/24 range. The network 192.168.1.0/28 is unavailable.\n* 2. For the IPv4 /28 subnet, router R1 must be configured with the first usable host address.\n* 3. For the IPv4 /28 subnet, router R2 must be configured with the last usable host address.\n* 4. For the IPv6 /64 subnet, configure the routers with the IP addressing provided from the topology.\n* 5. A ping must work between the routers on the IPv4 and IPv6 address ranges.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "swer as below configuration:",
            " R1",
            "nfig terminal",
            "v6 unicast-routing inter eth0/1",
            " addre 192.168.1.1 255.255.255.240",
            "v6 addre 2001:db8:aaaa::1/64 not shut",
            "d",
            "py running start",
            " R2",
            "nfig terminal",
            "v6 unicast-routing inter eth0/1",
            " address 192.168.1.14 255.255.255.240",
            "v6 address 2001:db8:aaaa::2/64 not shut",
            "d",
            "py running start",
            "-------------------",
            "r test from R1",
            "ng ipv6 2001:db8:aaaa::1",
            "r test from R2",
            "ng ipv6 2001:db8:aaaa::2",
            "W QUESTION 408",
            "(Topic 4)",
            "ich IPsec encryption mode is appropriate when the destination of a packet differs from the security termination point?",
            " tunnel",
            " transport",
            " aggressive",
            " main"
        ],
        "answer": 1
    },
    {
        "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nRefer to the exhibit.\nDrag and drop the learned prefixes from the left onto the subnet masks on the right",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 415",
            "(Topic 4)",
            "at is a function of the core and distribution layers in a collapsed-core architecture?",
            " The router must use IPv4 and IPv6 addresses at Layer 3.",
            " The core and distribution layers are deployed on two different devices to enable failover.",
            " The router can support HSRP for Layer 2 redundancy in an IPv6 network.",
            " The router operates on a single device or a redundant pair."
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhich switch becomes the root bridge?\nA)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "What is used as a solution for protecting an individual network endpoint from attack?",
        "options": [
            " Router",
            " Wireless controller",
            " Anti software",
            " Cisco DNA Center"
        ],
        "answer": 2
    },
    {
        "question": "Which IPv6 address range is suitable for anycast addresses for distributed services such DHCP or DNS?",
        "options": [
            " FF00:1/12",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " 2001:db8:0234:ca3e::1/128",
            " 2002:db84:3f37:ca98:be05:8/64",
            " FE80::1/10"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nWhich command must be enable a floating default route on router A?",
        "options": [
            " ip route 0.0.0.0 0.0.0.0 192.168.1.2",
            " ip default-gateway 192.168.2.1",
            " ip route 0.0.0.0 0.0.0.0 192.168.1.2 10",
            " ip route 0.0.0.0 0.0.0.0 192.168.2.1 10"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nR1 has taken the DROTHER role in the OSPF DR/BDR election process. Which configuration must an engineer implement so that R1 is elected as the DR?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "A WLC sends alarms about a rogue AP, and the network administrator verifies that the alarms are caused by a legitimate autonomous AP.",
        "options": [
            " Place the AP into manual containment.",
            " Remove the AP from WLC management.",
            " Manually remove the AP from Pending state.",
            " Set the AP Class Type to Friendly."
        ],
        "answer": 1
    },
    {
        "question": "Refer the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhat is the cause of poor performance on router R19?",
        "options": [
            " excessive collisions",
            " speed and duplex mismatch",
            " port oversubscription",
            " excessive CRC errors"
        ],
        "answer": 0
    },
    {
        "question": "What are two reasons a switch experiences frame flooding? (Choose two.)",
        "options": [
            " A defective patch cable is connected to the switch port",
            " Topology changes are occurring within spanning-tree",
            " An aged MAC (able entry is causing excessive updates",
            " Port-security is configured globally",
            " The forwarding table has overflowed"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nAn engineer must configure router R2 so it is elected as the DR on the WAN subnet. Which command sequence must be configured?\nA)\nB)\nC)\nD)",
        "options": [
            " Option",
            " Option",
            " Option",
            " Option"
        ],
        "answer": 0
    },
    {
        "question": "Drag and drop the TCP or UDP details from the left onto their corresponding protocols on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "planation:",
            "W QUESTION 445",
            "(Topic 4)",
            "ich port type does a lightweight AP use to connect to the wired network when it is configured in local mode?",
            " EtherChannel",
            " LAG",
            " trunk",
            " access"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of using First Hop Redundancy Protocol on a specific subnet?",
        "options": [
            " ensures a loop-free physical topology",
            " filters traffic based on destination IP addressing",
            " sends the default route to the hosts on a network",
            " forwards multicast hello messages between routers"
        ],
        "answer": 3
    },
    {
        "question": "An engineer is configuring router R1 with an IPv6 static route for prefix 2019:C15C:0CAF:E001::/64. The next hop must be 2019:C15C:0CAF:E002::1 The route\nmust be reachable via the R1 Gigabit 0/0 interface. Which command configures the designated route?",
        "options": [
            " R1(config)#ipv6 route 2019:C15C:0CAF:E001::/64 2019:C15C:0CAF:E002::1",
            " R1(config-if)#ipv6 route 2019:C15C:0CAF:E001::/64 2019:C15C:0CAF:E002::1",
            " R1(config-if)#ip route 2019:C15C:0CAF:E001::/64 GigabitEthernet0/0",
            " R1(config)#ip route 2019:C15C:0CAF:E001::/64 GigabitEthernet0/0"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nWhat is represented by \"R1\" and \"SW1\" within the JSON output?",
        "options": [
            " key",
            " array",
            " value",
            " object"
        ],
        "answer": 2
    },
    {
        "question": "What is a reason to configure a trunk port that connects to a WLC distribution port?",
        "options": [
            " Eliminate redundancy with a link failure in the data path.",
            " Allow multiple VLAN to be used in the data path.",
            " Provide redundancy if there is a link failure for out-of-band management.",
            " Permit multiple VLANs to provide out-of-band management.",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)"
        ],
        "answer": 3
    },
    {
        "question": "An engineer is configuring SSH version 2 exclusively on the R1 router. What is the minimum configuration required to permit remote management using the\ncryptographic protocol?",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "Recommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\n- (Topic 4)\nRefer lo the exhibit. What is the next-hop P address for R2 so that PC2 reaches the application server via ElGRP?",
        "options": [
            " 192.168.30.1",
            " 10.10 105",
            " 10.10.10.6",
            " 192.168.201"
        ],
        "answer": 3
    },
    {
        "question": "Which QoS queuing method discards or marks packets that exceed the desired bit rate of traffic flow?",
        "options": [
            " shaping",
            " policing",
            " CBWFQ",
            " LLQ"
        ],
        "answer": 1
    },
    {
        "question": "What is a function of an endpoint?",
        "options": [
            " It is used directly by an individual user to access network services",
            " It passes unicast communication between hosts in a network",
            " It transmits broadcast traffic between devices in the same VLAN",
            " It provides security between trusted and untrusted sections of the network."
        ],
        "answer": 0
    },
    {
        "question": "What is the operating mode and role of a backup port on a shared LAN segment in Rapid PVST+?",
        "options": [
            " forwarding mode and provides the lowest-cost path to the root bridge for each VLAN",
            " learning mode and provides the shortest path toward the root bridge handling traffic away from the LAN",
            " blocking mode and provides an alternate path toward the designated bridge",
            " listening mode and provides an alternate path toward the root bridge"
        ],
        "answer": 2
    },
    {
        "question": "Why would VRRP be implemented when configuring a new subnet in a multivendor environment?",
        "options": [
            " when a gateway protocol is required that support more than two Cisco devices for redundancy",
            " to enable normal operations to continue after a member failure without requiring a change In a host ARP cache",
            " to ensure that the spanning-tree forwarding path to the gateway is loop-free",
            " to interoperate normally with all vendors and provide additional security features for Cisco devices"
        ],
        "answer": 0
    },
    {
        "question": "Drag and drop the AAA features from the left onto the corresponding AAA security services on the right. Not all options are used.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 480",
            "(Topic 4)",
            "ich WAN topology has the highest degree of reliability?",
            " full mesh",
            " Point-to-point",
            " hub-and-spoke",
            " router-on-a-stick"
        ],
        "answer": 0
    },
    {
        "question": "What is the role of the root port in a switched network?",
        "options": [
            " It replaces the designated port when the designated port fails",
            " It is the best path to the root from a nonroot switch.",
            " It replaces the designated port when the root port fails.",
            " It is administratively disabled until a failover occurs."
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit. A multivendor network exists and the company is implementing VoIP over the network for the first time.\nA)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "When is the PUT method used within HTTP?",
        "options": [
            " when a nonidempotent operation is needed",
            " to update a DNS server",
            " to display a web site",
            " when a read-only operation it required"
        ],
        "answer": 1
    },
    {
        "question": "Why is TCP desired over UDP for application that require extensive error checking, such as HTTPS?",
        "options": [
            " UDP operates without acknowledgments, and TCP sends an acknowledgment for every packet received.",
            " UDP reliably guarantees delivery of all packets, and TCP drops packets under heavy load.",
            " UDP uses flow control mechanisms for the delivery of packets, and TCP uses congestion control for efficient packet delivery.",
            " UDP uses sequencing data tor packets to arrive in order, and TCP offers trie capability to receive packets in random order."
        ],
        "answer": 0
    },
    {
        "question": "Which enhancement is implemented in WPA3?",
        "options": [
            " applies 802.1x authentication",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " usesTKIP",
            " employs PKI to identify access points",
            " protects against brute force attacks"
        ],
        "answer": 3
    },
    {
        "question": "Drag and drop the characteristic from the left onto the IPv6 address type on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 494",
            "(Topic 4)",
            " a cloud-computing environment what is rapid elasticity?",
            " control and monitoring of resource consumption by the tenant",
            " automatic adjustment of capacity based on need",
            " pooling resources in a multitenant model based on need",
            " self-service of computing resources by the tenant"
        ],
        "answer": 1
    },
    {
        "question": "What is a zero-day exploit?",
        "options": [
            " It is when a new network vulnerability is discovered before a fix is available",
            " It is when the perpetrator inserts itself in a conversation between two parties and captures or alters data.",
            " It is when the network is saturated with malicious traffic that overloads resources and bandwidth",
            " It is when an attacker inserts malicious code into a SOL server."
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of classifying network traffic in QoS?",
        "options": [
            " services traffic according to its class",
            " identifies the type of traffic that will receive a particular treatment",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " writes the class identifier of a packet to a dedicated field in the packet header",
            " configures traffic-matching rules on network devices"
        ],
        "answer": 1
    },
    {
        "question": "Which type of address is shared by routers in a HSRP implementation and used by hosts on the subnet as their default gateway address?",
        "options": [
            " multicast address",
            " loopback IP address",
            " virtual IP address",
            " broadcast address"
        ],
        "answer": 2
    },
    {
        "question": "Which Cisco proprietary protocol ensures traffic recovers immediately, transparently, and automatically when edge devices or access circuits fail?",
        "options": [
            " SLB",
            " FHRP",
            " VRRP",
            " HSRP"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nAfter configuring a new static route on the CPE. the engineer entered this series of commands to verify that the new configuration is operating normally When is\nthe static default route installed into the routing table?",
        "options": [
            " when 203 0 113.1 is no longer reachable as a next hop",
            " when the default route learned over external BGP becomes invalid",
            " when a route to 203.0 113 1 is learned via BGP",
            " when the default route over external BGP changes its next hop"
        ],
        "answer": 0
    },
    {
        "question": "What does a switch search for in the CAM table when forwarding a frame?",
        "options": [
            " source MAC address and aging time",
            " destination MAC address and flush time",
            " source MAC address and source port",
            " destination MAC address and destination port"
        ],
        "answer": 3
    },
    {
        "question": "A network engineer must configure an interface with IP address 10.10.10.145 and a subnet mask equivalent to 11111111.11111111.11111111.11111000. Which\nsubnet mask must the engineer use?",
        "options": [
            " /29",
            " /30",
            " /27",
            " /28"
        ],
        "answer": 0
    },
    {
        "question": "Drag and drop the SNMP components from the left onto the description on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 518",
            "(Topic 4)",
            "fer to Itie exhibit",
            "network engineer started to configure port security on a new switch. These requirements must be met:",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "MAC addresses must be learned dynamically",
            "Log messages must be generated without disabling the interface when unwanted traffic is",
            "en",
            "ich two commands must be configured to complete this task\"? (Choose two)",
            " SW(ccnfig-if)=switchport port-security mac-address sticky",
            " SW(confKj-if)=switchport port-security violation restrict",
            " SW(config.if)sswitchport port-security mac-address 0010.7B84.45E6",
            " SW(config-if)aswitchport port-security maximum 2",
            " SW(ccnfig-if)=switchport port-security violation shutdown"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nThe EtherChannel is configured with a speed of 1000 and duplex as full on both ends of channel group 1. What is the next step to configure the channel on switch\nA to respond to but not initiate LACP communication?",
        "options": [
            " interface range gigabitethernet0/0/0-15 channel-group 1 mode on",
            " interface range gigabitethernet0/0/0-15 channel-group 1 mode desirable",
            " interface port-channel 1 channel-group 1 mode auto",
            " interface port-channel 1 channel-group 1 mode passive"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nRouter R1 must be configured to reach the 10.0.3.0/24 network from the 10.0.1.0/24 segment.\nWhich command must be used to configure the route?",
        "options": [
            " ip route 10.0.3.0 0.255255.255 10.0.4.2",
            " route add 10.0.3.0 mask 255.255.255.0 10.0.4.3",
            " Ip route 10.0.3.0 255.255.255.0 10.0.4.3",
            " route add 10.0.3.0 0.255.255.255 10.0.4.2",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nWhich prefix did router R1 learn from internal EIGRP?",
        "options": [
            " 192.168.10/24",
            " 192.168.3.0/24",
            " 192.168.2.0/24",
            " 172.16 1.0/24"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nWhich configuration for RTR-1 deniess SSH access from PC-1 to any RTR-1 interface and allows all other traffic?\nA)\nB)\nC)\nD)\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nA new VLAN and switch are added to the network. A remote engineer configures OldSwitch and must ensure that the configuration meets these requirements:\n\u2022 accommodates current configured VLANs\n\u2022 expands the range to include VLAN 20\n\u2022 allows for IEEE standard support for virtual LANs\nWhich configuration on the NewSwitch side of the link meets these requirements?\nA)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "Why would a network administrator choose to implement automation in a network environment?",
        "options": [
            " To simplify the process of maintaining a consistent configuration state across all devices",
            " To centralize device information storage",
            " To implement centralized user account management",
            " To deploy the management plane separately from the rest of the network Answer: A"
        ],
        "answer": 0
    },
    {
        "question": "Drag and drop the virtualization concepts from the left onto the matching statements on the right.",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 542",
            "AG DROP - (Topic 4)",
            "fer to the exhibit.",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "e Router1 routing table has multiple methods to reach 10.10.10.0/24 as shown. The default Administrative Distance is used. Drag and drop the network",
            "nditions from the left onto the routing methods that Router1 uses on the right.",
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 543",
            "(Topic 4)",
            "ich access point mode relies on a centralized controller for management, roaming, and SSID configuration?",
            " repeater mode",
            " autonomous mode",
            " bridge mode",
            " lightweight mode",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nWhat is the subnet mask of the route to the 10.10.13.160 prefix?",
        "options": [
            " 255.255.255.240",
            " 255.255.255.128",
            " 255.255.248.",
            " 255.255.255.248"
        ],
        "answer": 3
    },
    {
        "question": "An engineer is configuring switch SW1 to act an NTP server when all upstream NTP server connectivity fails. Which configuration must be used?\nA)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nRouter OldR is replacing another router on the network with the intention of having OldR and R2 exchange routes_ After the engineer applied the initial OSPF\nconfiguration: the routes were still missing on both devices. Which command sequence must be issued before the clear IP ospf process command is entered to\nenable the neighbor relationship?",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "What are two purposes of HSRP? (Choose two.)",
        "options": [
            " It groups two or more routers to operate as one virtual router.",
            " It improves network availability by providing redundant gateways.",
            " It passes configuration information to hosts in a TCP/IP network.",
            " It helps hosts on the network to reach remote subnets without a default gateway.",
            " It provides a mechanism for diskless clients to autoconfigure their IP parameters during boot."
        ],
        "answer": 0
    },
    {
        "question": "A DHCP pool has been created with the name NOCC. The pool is using 192.168.20.0/24 and must use the next to last usable IP address as the default gateway\nfor the DHCP clients. What is the next step in the process?",
        "options": [
            " default-router192.168.20.253",
            " network 192.168.20.254 255.255.255.0 secondary",
            " ip default-gateway 0.0.0.0 0.0.0.0 192.168.20.253",
            " next-server 192.168.20.254"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhat is the next step to complete the implementation for the partial NAT configuration shown?",
        "options": [
            " Reconfigure the static NAT entries that overlap the NAT pool",
            " Configure the NAT outside interface",
            " Modify the access list for the internal network on e0/1",
            " Apply the ACL to the pool configuration"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nWhen router R1 receives a packet with destination IP address 10.56.0 62. through which interface does it route the packet?",
        "options": [
            " Null0",
            " VIan58",
            " Vlan60",
            " VIan59"
        ],
        "answer": 1
    },
    {
        "question": "What are two advantages of implementing a controller-based architecture instead of a traditional network architecture? (Choose two.)",
        "options": [
            " It allows for seamless connectivity to virtual machines.",
            " It supports complex and high-scale IP addressing schemes.",
            " It enables configuration task automation.",
            " It provides increased scalability and management options.",
            " It increases security against denial-of-service attacks."
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nLoad-balanced traffic is coming in from the WAN destined to a host at 172.16.1.190. Which next-hop is used by the router to forward the request?",
        "options": [
            " 192.168.7.4",
            " 192.168.7.7",
            " 192.168.7.35",
            " 192.168.7.40"
        ],
        "answer": 3
    },
    {
        "question": "Which two transport layer protocols carry syslog messages? (Choose two.)",
        "options": [
            " TCP",
            " IP",
            " RTP",
            " UDP",
            " ARP"
        ],
        "answer": 0
    },
    {
        "question": "What describes the functionality of southbound APIs?",
        "options": [
            " They use HTTP messages to communicate.",
            " They enable communication between the controller and the network device.",
            " They convey information from the controller to the SDN applications.",
            " They communicate with the management plane."
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit. An engineer must configure a static network route between two networks so that host A communicates with host B. Drag and drop the\ncommands from the left onto the routers where they must be configured on the right. Not all commands are used.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 576",
            "(Topic 4)",
            "fer to the exhibit. IPv6 must be implemented on R1 to the ISP The uplink between R1 and the ISP must be configured with a manual assignment, and the LAN",
            "terface must be self-provisioned Both connections must use the applicable IPv6 networks Which two configurations must be applied to R1? (Choose two.)",
            " interface Gi0/1ipv6 address 2001:db8:0F1B:FCCB:ACCE:FCED:ABCD:FA02:/127",
            " interface Gi0/0ipv6 address 2001:db8:1:AFFF::/64 eui-64",
            " interface Gi0/1ipv6 address 2001:db8:0F1B:FCCB:ACCE:FCED:ABCD:FA00:/127",
            " interface Gi0/0ipv6 address 2001:db8:0:AFFF::/64 eui-64",
            " interface Gi0/0ipv6 address 2001:db8:0F1B:FCCB:ACCE:FCED:ABCD:FA03;/127"
        ],
        "answer": 2
    },
    {
        "question": "A network engineer is upgrading a small data center to host several new applications, including server backups that are expected to account for up to 90% of the\nbandwidth during peak times. The data center connects to the MPLS network provider via a primary circuit and a secondary circuit. How does the engineer\ninexpensively update the data center to avoid saturation of the primary circuit by traffic associated with the backups?",
        "options": [
            " Assign traffic from the backup servers to a dedicated switch.",
            " Configure a dedicated circuit for the backup traffic.",
            " Place the backup servers in a dedicated VLAN.",
            " Advertise a more specific route for the backup traffic via the secondary circuit."
        ],
        "answer": 0
    },
    {
        "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhich cable type must be used to interconnect one switch using 1000 BASE-SX GBiC modules and another switch using 1000 BASE-SX SFP modules?",
        "options": [
            " LC to SC",
            " SC t ST",
            " SC to SC",
            " LC to LC"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nAn engineer is checking the routing table in the main router to identify the path to a server on the network. Which route does the router use to reach the server at\n192.168.2.2?",
        "options": [
            " S 192.168.0.0/20 [1/0] via 10.1.1.1",
            " S 192.168.2.0/29 [1/0] via 10.1.1.1",
            " S 192.168.2.0/28 [1/0] via 10.1.1.1",
            " S 192.168.1.0/30 [1/0] via 10.1.1.1"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nA network engineer configures the Cisco WLC to authenticate local wireless clients against a RADIUS server Which task must be performed to complete the\nprocess?",
        "options": [
            " Change the Server Status to Disabled",
            " Select Enable next to Management",
            " Select Enable next to Network User",
            " Change the Support for CoA to Enabled."
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nWhich two values does router R1 use to determine the best path to reach destinations in network 1,0.0.0/8? (Choose two.)",
        "options": [
            " longest prefix match",
            " highest administrative distance",
            " highest metric",
            " lowest metric",
            " lowest cost to reach the next hop"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit. An engineer is asked to conf\u00e8re router R1 so that it forms an OSPF single-area neighbor relationship with R2. Which command sequence\nmust be implemented to configure the router?",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "Which signal frequency appears 60 times per minute?",
        "options": [
            " 1 Hz signal",
            " 1 GHz signal",
            " 60 Hz signal",
            " 60 GHz signal"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit. Each router must be configured with the last usable IP address in the subnet. Which configuration fulfills this requirement?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "A network engineer is replacing the switches that belong to a managed-services client with new Cisco Catalyst switches. The new switches will be configured for\nupdated security standards, including replacing Telnet services with encrypted connections and doubling the modulus size from 1024. Which two commands must\nthe engineer configure on the new switches? (Choose two.)",
        "options": [
            " crypto key generate rsa general-keys modulus 1024",
            " transport input all",
            " crypto key generate rsa usage-keys",
            " crypto key generate rsa modulus 2048",
            " transport Input ssh"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit. What is the cause of the issue?\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " STP",
            " port security",
            " wrong cable type",
            " shutdown command"
        ],
        "answer": 1
    },
    {
        "question": "Which type of hypervisor operates without an underlying OS to host virtual machines?",
        "options": [
            " Type 1",
            " Type 2",
            " Type 3",
            " Type 12"
        ],
        "answer": 0
    },
    {
        "question": "A network analyst is tasked with configuring the date and time on a router using EXEC mode. The date must be set to January 1. 2020 and the time must be set to\n12:00 am. Which command should be used?",
        "options": [
            " clock summer-time recurring",
            " clock timezone",
            " clock summer-time date",
            " clock set"
        ],
        "answer": 3
    },
    {
        "question": "What is the role of nonoverlapping channels in a wireless environment?",
        "options": [
            " to reduce interference",
            " to allow for channel bonding",
            " to stabilize the RF environment",
            " to increase bandwidth"
        ],
        "answer": 0
    },
    {
        "question": "Refer to the exhibit.\nA network engineer executes the show ip route command on router D. What is the next hop to network 192.168 1 0/24 and why?",
        "options": [
            " The next hop is 10.0.2.1 because it uses distance vector routing",
            " The next hop is 10.0.2.1 because it is a link-state routing protocol",
            " The next hop is 10.0.0.1 because it has a better administrative distance",
            " The next hop is 10.0.0.1 because it has a higher metric."
        ],
        "answer": 1
    },
    {
        "question": "Recommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\n- (Topic 4)\nRefer to the exhibit.\nR1 has just received a packet from host A that is destined to host B. Which route in the routing table is used by R1 to reac B?",
        "options": [
            " 10.10.13.0/25 [108/0] via 10.10.10.10",
            " 10.10.13.0/25 [110/2] via 10.10.10.2",
            " 10.10.13.0/25 [110/2] via 10.10.10.6",
            " 10.10.13.0/25 [1/0] via 10.10.10.2"
        ],
        "answer": 3
    },
    {
        "question": "Which syslog severity level is considered the most severe and results in the system being considered unusable?",
        "options": [
            " Alert",
            " Error",
            " Emergency",
            " Critical"
        ],
        "answer": 2
    },
    {
        "question": "What is the function of a controller in a software-defined network?",
        "options": [
            " multicast replication at the hardware level",
            " forwarding packets",
            " fragmenting and reassembling packets",
            " setting packet-handling policies"
        ],
        "answer": 1
    },
    {
        "question": "Drag and drop the AAA features from the left onto the corresponding AAA security services on the right. Not all options are used.\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
        "options": [
            " Mastered",
            " Not Mastered",
            "swer: A",
            "planation:",
            "W QUESTION 634",
            "(Topic 4)",
            "fer to the exhibit.",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            "ich two values does router R1 use to identify valid routes for the R3 loopback address 1.1.1.3/32? (Choose two.)",
            " lowest cost to teach the next hop",
            " highest metric",
            " highest administrative distance",
            " lowest metric",
            " lowest administrative distance"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nThe loopback1 interface of the Atlanta router must reach the lookback3 interface of the Washington router.",
        "options": [
            " ipv6 route 2000::1/128 2012::2",
            " ipv6 route 2000::1/128 2012::1",
            " ipv6 route 2000:3 123 s0/0/0",
            " ipv6 route 2000::3/128 2023::3",
            " ipv6 route 2000::1/128 s0/0/1"
        ],
        "answer": 1
    },
    {
        "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nSW1 supports connectivity for a lobby conference room and must be secured. The engineer must limit the connectivity from PCI lo ma SW1 and SW2 network.\nThe MAC addresses allowed must be Limited to two. Which configuration secures the conference room connectivity?\nA)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 1
    },
    {
        "question": "When a WPA2-PSK WLAN is configured in the Wireless LAN Controller, what is the minimum number of characters that is required in ASCII format?",
        "options": [
            " 6",
            " 8",
            " 12",
            " 18"
        ],
        "answer": 1
    },
    {
        "question": "Which WPA mode uses PSK authentication?",
        "options": [
            " Local",
            " Client",
            " Enterprise",
            " Personal"
        ],
        "answer": 2
    },
    {
        "question": "It work security team noticed that an increasing number of employees are becoming victims of phishing attacks. Which security program should be implemented to\nPassing Certification Exams Made Easy visit - https://www.surepassexam.com\nRecommend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)\nmitigate the problem?",
        "options": [
            " email system patches",
            " physical access control",
            " software firewall enabled on all PCs",
            " user awareness training"
        ],
        "answer": 3
    },
    {
        "question": "Which two HTTP methods are suitable for actions performed by REST-based APIs? (Choose two.)",
        "options": [
            " REMOVE",
            " REDIRECT",
            " OPOST",
            " GET",
            " UPOP"
        ],
        "answer": 2
    },
    {
        "question": "A)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            "ssing Certification Exams Made Easy visit - https://www.surepassexam.com",
            "commend!! Get the Full 200-301 dumps in VCE and PDF From SurePassExam",
            "tps://www.surepassexam.com/200-301-exam-dumps.html (903 New Questions)",
            " Option D"
        ],
        "answer": 3
    },
    {
        "question": "An engineer is installing a new wireless printer with a static IP address on the Wi-Fi network. Which feature must be enabled and configured to prevent connection\nissues with the printer?",
        "options": [
            " client exclusion",
            " passive client",
            " DHCP address assignment",
            " static IP tunneling"
        ],
        "answer": 2
    },
    {
        "question": "Refer to the exhibit.\nA network engineer must update the configuring on switch2 so that it sends LLDP packets.\nA)\nB)\nC)\nD)",
        "options": [
            " Option A",
            " Option B",
            " Option C",
            " Option D"
        ],
        "answer": 2
    },
    {
        "question": "Which components are contained within a virtual machine?",
        "options": [
            " physical resources, including the NIC, RAM, disk, and CPU",
            " configuration files backed by physical resources from the Hypervisor",
            " applications running on the Hypervisor",
            " processes running on the Hypervisor and a guest OS"
        ],
        "answer": 1
    },
    {
        "question": "Refer to the exhibit.\nAll traffic enters the CPE router from interface Serial0/3 with an IP address of 192 168 50 1 Web traffic from the WAN is destined for a LAN network where servers\nare load-balanced An IP packet with a destination address of the HTTP virtual IP of 192 1681 250 must be forwarded Which routing table entry does the router\nuse?",
        "options": [
            " 192.168.1.0/24 via 192.168.12.2",
            " 192.168.1.128/25 via 192.168.13.3",
            " 192.168.1.192/26 via 192.168.14.4",
            " 192.168.1.224/27 via 192.168.15.5"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the ip address dhcp command?",
        "options": [
            " to configure an Interface as a DHCP server",
            " to configure an interface as a DHCP helper",
            " to configure an interface as a DHCP relay",
            " to configure an interface as a DHCP client"
        ],
        "answer": 3
    },
    {
        "question": "Refer to the exhibit.\nA company is configuring a failover plan and must implement the default routes in such a way that a floating static route will assume traffic forwarding when the\nprimary link goes down. Which primary route configuration must be used?",
        "options": [
            " ip route 0.0.0.0 0.0.0.0 192.168.0.2 GigabitEthernetl/0",
            " ip route 0.0.0.0 0.0.0.0 192.168.0.2 tracked",
            " ip route 0.0.0.0 0.0.0.0 192.168.0.2 floating",
            " ip route 0.0.0.0 0.0.0.0 192.168.0.2"
        ],
        "answer": 1
    }
];