(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{288:function(s,a,e){s.exports=e.p+"assets/img/module-scaling1.d9d22450.svg"},289:function(s,a,e){s.exports=e.p+"assets/img/module-scaling2.3f74dfba.svg"},429:function(s,a,e){s.exports=e.p+"assets/img/components-of-kubernetes.51120ad2.svg"},430:function(s,a,e){s.exports=e.p+"assets/img/module-cluster.2a269917.svg"},431:function(s,a,e){s.exports=e.p+"assets/img/module-first-app.22644517.svg"},432:function(s,a,e){s.exports=e.p+"assets/img/module-pods.ccc5ba54.svg"},433:function(s,a,e){s.exports=e.p+"assets/img/module-nodes.38f0ef71.svg"},434:function(s,a,e){s.exports=e.p+"assets/img/module-labels.6860a8c4.svg"},558:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[s._v("#")]),s._v(" Kubernetes")]),s._v(" "),a("p",[a("strong",[s._v("k8s")]),s._v("라고도 불려진다. CI/CD 도구중에 하나라고 볼 수 있으며, MSA Achitecture에서 빼놓을 수 없는 잦은 배포를 감당할 수 있는 CI/CD를 구성하기에 적합한 Service입니다.")]),s._v(" "),a("blockquote",[a("p",[s._v("2014년에 구글에서 제공한 오픈소스로 시작되었고 대규모 프로덕션을 다루기에 적합하다고 한다.")])]),s._v(" "),a("h2",{attrs:{id:"대표적인-기능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대표적인-기능"}},[s._v("#")]),s._v(" 대표적인 기능")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Service dicovery and load balancing - 서비스 검색 및 로드 벨런싱 DNS나 IP주소를 사용하여 컨테이너를 토출 할 수 있다.")])]),s._v(" "),a("li",[a("p",[s._v("Storage orchestration - 스토리지 시스템 탑재")])]),s._v(" "),a("li",[a("p",[s._v("Automated rollouts and rollbacks - 자동으로 배포의 속도 및 상태에 대한 조절이 이루어지도록 할 수 있다.")])]),s._v(" "),a("li",[a("p",[s._v("Automaic bin packing - node cluster를 제공받을 수 있다.")])]),s._v(" "),a("li",[a("p",[s._v("Self-healing - 실패한 컨테이너를 다시 시작하고, 교체학, 종료하고, 준비가 될 때까지 클라이언트에게 응답하지 않을 수 있다.")])]),s._v(" "),a("li",[a("p",[s._v("Secret and configuration management - 비밀번호 Oauth, SSH key 등등 민감함 정보를 저장 관리, 컨테이너 이미지 다시 빌드하지 않고 배포 업데이트 할 수 있다.")])])]),s._v(" "),a("p",[a("img",{attrs:{src:e(429),alt:"kubernetes"}})]),s._v(" "),a("p",[s._v("배포 과정에 "),a("code",[s._v("cluster")]),s._v("가 만들어 진다,")]),s._v(" "),a("p",[s._v("이러한 "),a("code",[s._v("cluster")]),s._v("의 경우에는 컨테이너화된 어플리케이션을 실행하는 "),a("code",[s._v("node")]),s._v("라는 작업자 머신 세트로 구성된다. 모든 cluster는 하나 이상의 node가 있다.")]),s._v(" "),a("p",[a("code",[s._v("node")]),s._v("라는 가상 컴퓨팅 환경에서 "),a("code",[s._v("Pod")]),s._v("라는 컨테이너를 실행 되게 된다.")]),s._v(" "),a("h2",{attrs:{id:"cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[s._v("#")]),s._v(" Cluster")]),s._v(" "),a("p",[a("img",{attrs:{src:e(430),alt:"cluster"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Control Plane\ncluster를 managing 한다. 어플리케이션 상태, 스케일 업, 업데이트 롤 아웃, 어플리케이션 예약 등의 cluster의 모든 활동을 조정하는 역활")])]),s._v(" "),a("li",[a("p",[s._v("Nodes\ncluster의 작업자 역할을 하는 VM(Virtual Machine) 물리적 컴퓨터, "),a("code",[s._v("Kubelet")]),s._v("을 통해 Control Plane 과 통신하고 다른 노드를 관리할 수 있다.\n"),a("code",[s._v("containered")]),s._v(" or "),a("code",[s._v("Docker")]),s._v(" 같은 컨테이너 작업 처리 도구도 필요하다.")]),s._v(" "),a("p",[s._v("*Production traffic을 처리하는 클러스터에는 최소 3개의 Node가 필요하다.")])])]),s._v(" "),a("h2",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[s._v("#")]),s._v(" Deploy")]),s._v(" "),a("p",[a("img",{attrs:{src:e(431),alt:"Deploy"}})]),s._v(" "),a("ul",[a("li",[s._v("kubernetes는 자가 치유적인 메커니즘을 제공합니다.")]),s._v(" "),a("li",[s._v("인스턴스를 호스팅하는 노드가 다움되거나 삭제되면 배포 controller는 해당 인스턴스를 크러스터의 다른 노드에 있는 인스턴스로 교체합니다.")])]),s._v(" "),a("p",[a("code",[s._v("kubectl create deployment {deploy name} --image={image location}")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("위 작업은 3 가지의 작업을 수행 합니다")]),s._v(" "),a("ul",[a("li",[s._v("어플리케이션의 인스턴스를 실행할 수 있는 적절한 노드를 검색")]),s._v(" "),a("li",[s._v("해당 노드에서 실행되도록 응용 프로그램을 예약")]),s._v(" "),a("li",[s._v("필요할 때 새 노드에 인스턴스를 다시 예약하도록 클러스터를 구성")])])])]),s._v(" "),a("p",[s._v("Cluster 내부는 사설 네트워크로 통신을 전달항 프록시를 만들수 있다. (외부와의 통신이 필요한 경우 별도의 환경구성 필요)")]),s._v(" "),a("p",[a("code",[s._v("kubectl proxy")]),s._v(" => "),a("code",[s._v("127.0.0.1:8001")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:8001/version\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"major"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minor"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitVersion"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1.20.2"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitCommit"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"faecb196815e248d3ecfb03c680a4507229c2a56"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitTreeState"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clean"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"buildDate"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-01-13T13:20:00Z"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"goVersion"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go1.15.5"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compiler"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gc"')]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"platform"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"linux/amd64"')]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("API server는 "),a("code",[s._v("Pod")]),s._v("이름을 기반으로 프록시를 통해 액세스할 수 있는 각 Pod에 대한 엔드포인트를 자동으로 생성한다.")]),s._v(" "),a("p",[s._v("먼저 Pod 이름을 가져와야 하고 POD_NAME 환경 변수에 저장합니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POD_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" go-template "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{range .items}}{{.metadata.name}}{{\"\\n\"}}{{end}}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Name of the Pod: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POD_NAME")]),s._v("\n")])])]),a("p",[s._v("이제 API server를 통해 Pod에 접근 할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:8001/api/v1/namespaces/default/pods/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POD_NAME")]),s._v("/\n")])])]),a("h2",{attrs:{id:"pods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pods"}},[s._v("#")]),s._v(" Pods")]),s._v(" "),a("p",[a("img",{attrs:{src:e(432),alt:"Pods"}})]),s._v(" "),a("p",[a("code",[s._v("Pod")]),s._v("는 하나의 도커 컨테이너라고 말할수있다. 공식 문서에는 컨테이너에 대한 일부 공유 리소스 혹은 하나이상의 어플리케이션 컨테이너의 Kubernetes의 추상화라고 한다. 즉 리소스 그룹 or 어플리케이션 컨테이너가 되겠다.")]),s._v(" "),a("p",[a("strong",[s._v("리소스 그룹")])]),s._v(" "),a("ul",[a("li",[s._v("Shared storage, as Volumes")]),s._v(" "),a("li",[s._v("Networking, as a unique cluster IP address")]),s._v(" "),a("li",[s._v("Information about how to run each container, such as the container image version or specific ports to use")])]),s._v(" "),a("p",[s._v("즉 Pod에는 Node.js 앱이 담긴 컨테이너, Node.js 웹 서버에서 게시할 데이터를 제공하는 다른 컨테이너가 모두 포함 될 수 있다.")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("Pod")]),s._v("는 Kubernetes의 가장작은 단위를 이룹니디.")])]),s._v(" "),a("ul",[a("li",[s._v("Kubernetes에서 Deployment를 생성할 때 해당 Deployment는 내부에 컨테이너가 있는 Pod를 생성합니다.")]),s._v(" "),a("li",[s._v("각 Pod는 예약된 노드에 연결되며 종료(재시작 정책에 따라) 또는 삭제될 때까지 유지됩니다.")]),s._v(" "),a("li",[s._v("노드 오류의 경우 클러스터에서 사용 가능한 다른 노드에서 동일한 포드가 예약됩니다.")])]),s._v(" "),a("h2",{attrs:{id:"nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[s._v("#")]),s._v(" Nodes")]),s._v(" "),a("p",[a("code",[s._v("Pod")]),s._v("는 항상 "),a("code",[s._v("Node")]),s._v("에서 실행된다. "),a("code",[s._v("Node")]),s._v("는 Kubernetes의 작업자이고, 클러스터에 따라 가상머신(VM) 또는 물리적인 컴퓨터일 수 있습니다.")]),s._v(" "),a("p",[s._v("Node는 Control plane에 의하여 제어되고, Cluster의 노드 전체에서 Pod의 스케줄링을 자동으로 처리한다.")]),s._v(" "),a("p",[a("img",{attrs:{src:e(433),alt:"Node"}})]),s._v(" "),a("ul",[a("li",[s._v("Kubelet : API를 통한 Control plane과 node간의 통신을 통하여 managees the Pods and the containers running on a machine.")]),s._v(" "),a("li",[s._v("Container runtime : 기본적으로 docker와 같은 컨테이너의 런타임 환경")])]),s._v(" "),a("p",[a("code",[s._v("kubectl exec $POD_NAME -- env")])]),s._v(" "),a("p",[s._v("실행된 Pod 환경에 명령 입력하기 "),a("code",[s._v("exec")]),s._v("를 통해 할 수 있다.")]),s._v(" "),a("p",[s._v("이때 Pod에는 Container가 하나만 있으므로 컨테이너의 이름을 생략 할 수 있다.")]),s._v(" "),a("p",[a("code",[s._v("kubectl exec -ti $POD_NAME -- sh")])]),s._v(" "),a("p",[s._v("Container sh shell 실행하기")]),s._v(" "),a("h2",{attrs:{id:"servcie-expose-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servcie-expose-app"}},[s._v("#")]),s._v(" Servcie Expose App")]),s._v(" "),a("p",[s._v("작업자의 노드가 죽으면 노드에서 실행 중인 Pod 또한 손실됩니다. 그 다음 "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ReplicaSet"),a("OutboundLink")],1),s._v("은 어플리케이션 실행을 유지하기 위해 새 Pod생성을 통해 클러스터를 동적으로 원하는 상태로 되돌릴 수 있습니다.")]),s._v(" "),a("p",[s._v("즉, Kubernetes 클러스터의 각 Pod에는 고유한 IP address가 부여되고 심지어 동일한 Node에 있는 Pod도 있기에 어플리케이션이 계속 동작할 수 있도록 Pod 간에 변경사한을 자동으로 조정하는 방법이 필요하다!")]),s._v(" "),a("h3",{attrs:{id:"service-in-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-in-kubernetes"}},[s._v("#")]),s._v(" Service in Kubernetes")]),s._v(" "),a("p",[s._v("논리적 Pod 집합과 이에 엑세스 하는 정책을 정의하는 추상화다.")]),s._v(" "),a("p",[s._v("서비스는 종속(dependent) Pod간의 느슨한 결합을 가능하게 한다.")]),s._v(" "),a("p",[a("code",[s._v("YAML")]),s._v(" or "),a("code",[s._v("JSON")]),s._v("으로 정의 할 수 있다.")]),s._v(" "),a("p",[s._v("위에서 "),a("a",{attrs:{href:"##Deploy"}},[s._v("언급")]),s._v(" 한 것 처럼 각 Pod는 고유한 IP 주소가 있지만 이러한 IP는 서비스 없이 클러스터 외부에 노출 되지는 않는다.")]),s._v(" "),a("p",[s._v("Service를 통해 어플리케이션이 트레픽을 수신할 수 있다. "),a("code",[s._v("ServiceSpec")]),s._v("에서 "),a("code",[s._v("type")]),s._v("을 지정하여 서비스를 다양한 방식으로 노출할 수 있다.")]),s._v(" "),a("ul",[a("li",[s._v("ClusterIP "),a("em",[s._v("(default)")]),s._v(" : 기본 값이다. 클러스터 내에서만 서비스에 연결할 수 있다.")]),s._v(" "),a("li",[s._v("NodePort : NAT을 이용하여 클러스터에서 선택된 각 노드의 동일한 포트에서 서비스를 노출한다.  "),a("code",[s._v("<NodeIP>:<NodePort>")]),s._v("를 사용하여 클러스터 외부에서 서비스를 엑세스 할 수 있다. ClusterIP의 상위 집합")]),s._v(" "),a("li",[s._v("LoadBalancer : 현재 클라우드에 외부 로드 밸런서를 생성하고(가능한 경우), 고정 외부 IP를 서비스에 할당합니다. NodePort의 상위 집합")]),s._v(" "),a("li",[s._v("ExternalName : CNAME record를 반환하여 서비스를 externalName field(e.g: jeong.bar.example.com)의 내용에 매핑한다. 어떤 종류의 프록시도 설정되지 않습니다.")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/",target:"_blank",rel:"noopener noreferrer"}},[s._v("더 자세한 내용"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"service-and-labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-and-labels"}},[s._v("#")]),s._v(" Service and Labels")]),s._v(" "),a("p",[s._v("위에서 Service에 대한 설명으로 Pod 집합의 트래픽을 라우팅하는 역할을 한다고 이해했다.")]),s._v(" "),a("p",[s._v("Service는 알아서 Pod가 중단되고 복제되는 것을 추상화하고, 어플리케이션에 영향을 주지않고 이를 수행한다.")]),s._v(" "),a("p",[s._v("한 어플리케이션의 "),a("strong",[s._v("Frontend 와 Backend간의 검색 및 라우팅을 Service에서 처리한다.")])]),s._v(" "),a("p",[a("code",[s._v("Service")]),s._v("는 논리적 작업을 허용하는 그룹화 기본 요소로 "),a("code",[s._v("label")]),s._v(" "),a("code",[s._v("selector")]),s._v("를 이용하여 "),a("code",[s._v("Pod")]),s._v("집합을 찾아낸다.")]),s._v(" "),a("p",[a("code",[s._v("label")]),s._v("은 "),a("code",[s._v("key/value")]),s._v("페어로 이루어져 있고, 다음과 같은 방식으로 객체에 연결된다.")]),s._v(" "),a("ul",[a("li",[s._v("버전 태그")]),s._v(" "),a("li",[s._v("Dev, test, Prod 등의 상태")]),s._v(" "),a("li",[s._v("tag를 사용한 개체 분류")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(434),alt:"label"}})]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get services\n\nNAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   AGE\nkubernetes   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP   43s\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl expose deployment/kubernetes-bootcamp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NodePort"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n$ kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n\nNAME                  TYPE        CLUSTER-IP     EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          AGE\nkubernetes            ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP          2m\nkubernetes-bootcamp   NodePort    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.98")]),s._v(".181.26   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":30030/TCP   59s\n")])])]),a("p",[s._v("외부로 열린 포트를 확인하는 방법")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl describe services/kubernetes-bootcamp\n\nName:                     kubernetes-bootcamp\nNamespace:                default\nLabels:                   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\nAnnotations:              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nSelector:                 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\nType:                     NodePort\nIP Families:              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nIP:                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.98")]),s._v(".181.26\nIPs:                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.98")]),s._v(".181.26\nPort:                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP\nTargetPort:               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/TCP\nNodePort:                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30030")]),s._v("/TCP\nEndpoints:                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.4:8080\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("노드 포트 값이 할당된 NODE_PORT라는 환경 변수를 만듭니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get services/kubernetes-bootcamp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" go-template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{(index .spec.ports 0).nodePort}}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE_PORT")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30030")]),s._v("\n")])])]),a("p",[s._v("외부로 노출된 PORT에 잘 접근되는지 확인할 수 있다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("minikube "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE_PORT")]),s._v("\n")])])]),a("p",[s._v("자동으로 Pod에 대한 Label을 만들었습니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl describe deployment\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nLabels: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v("목록중에 쿼리를 할 수 있다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\n\nNAME                                  READY   STATUS    RESTARTS   AGE\nkubernetes-bootcamp-fb5c67579-j8knz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          6m58s\n")])])]),a("p",[s._v("서비스 쿼리도 가능하다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get services "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\n\nNAME                  TYPE       CLUSTER-IP      EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          AGE\nkubernetes-bootcamp   NodePort   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".217.250   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":30014/TCP   4m46s\n")])])]),a("p",[s._v("Pod name을 환경 변수에 담아보자")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POD_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" go-template "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{range .items}}{{.metadata.name}}{{\"\\n\"}}{{end}}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Name of the Pod: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POD_NAME")]),s._v("\nName of the Pod: kubernetes-bootcamp-fb5c67579-j8knz\n")])])]),a("p",[s._v("새로운 label 부여하기")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl label pods "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POD_NAME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\npod/kubernetes-bootcamp-fb5c67579-j8knz labeled\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl describe pods "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POD_NAME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nLabels:       "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\n              pod-template-hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fb5c67579\n              "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1\nNAME                                  READY   STATUS    RESTARTS   AGE\nkubernetes-bootcamp-fb5c67579-j8knz   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          11m\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl delete "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-bootcamp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubernetes-bootcamp"')]),s._v(" deleted\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get services\nNAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   AGE\nkubernetes   ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.96")]),s._v(".0.1    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP   14m\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("minikube "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE_PORT")]),s._v("\ncurl: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Failed to connect to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.25 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30014")]),s._v(": Connection refused\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ti")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$POD_NAME")]),s._v(" -- "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" localhost:8080\nHello Kubernetes bootcamp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Running on: kubernetes-bootcamp-fb5c67579-j8knz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("v")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n")])])]),a("h2",{attrs:{id:"scaling-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-overview"}},[s._v("#")]),s._v(" Scaling overview")]),s._v(" "),a("p",[a("img",{attrs:{src:e(288),alt:"scale_out"}})]),s._v(" "),a("p",[a("img",{attrs:{src:e(289),alt:"scale_out2"}})]),s._v(" "),a("p",[s._v("스케일 아웃을 통해 사용가능한 리소스가 있는 노드에 Pod가 생성되고 예약됩니다.")]),s._v(" "),a("p",[a("strong",[s._v("Kubernetes는 Autoscaling을 지원하지만 여기서는 다루지 않습니다.")])]),s._v(" "),a("p",[s._v("애플리케이션의 여러 인스턴스를 실행하려면 모든 인스턴스에 트래픽을 분산하는 방법이 필요하다.")]),s._v(" "),a("p",[s._v("Service에는 배포된 모든 Pod에 네트워크 트래픽을 분산하는 통합 로드 밸런서가 있다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);