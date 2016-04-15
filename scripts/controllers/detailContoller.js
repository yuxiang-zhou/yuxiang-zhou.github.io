'use strict';
/**
 * @ngdoc function
 * @name marketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marketApp
 */

angular.module('resume').controller(
  'DetailCtrl',
  [
    '$scope', '$rootScope', '$http', '$timeout', '$state', '$stateParams',
    function (
      $scope, $rootScope, $http, $timeout, $state, $stateParams
    ) {
      $scope.firstname = 'Yuxiang';
      $scope.lastname = 'Zhou';
      $scope.fullname = $scope.firstname + ' ' + $scope.lastname;
      $scope.current = 'Ph.D Student at Imperial College London';
      $scope.location = 'Imperial College London, London, UK';
      $scope.email = 'yuxiang.zhou10@imperial.ac.uk';
      $scope.website = 'http://bit.do/yuxiang-zhou';
      $scope.phone = '+44(0)7544010038';

      $scope.aboutme = [
        'I recieved my Master Engineering degree in Computing at Imperial College London, UK, in 2014. My research focused on facial landmark points localization, automatic detection of facial events and their applications on sign language recognition.',
        'Currently, I am a PhD student in the Department of Computing, Imperial College London, U.K., working at the iBUG group under the supervision of Dr. Stefanos Zafeiriou. My research interests lie in the fields of computer vision, pattern recognition, statistical machine learning and human-computer interaction with particular focus on developing methods for densely correlated deformable models for articulated objects under unconstrained conditions.'
      ];

      $scope.educations = [
        {
          title: 'Computer Science Ph.D',
          major: 'Statistical Machine Learning & Computer Vision',
          uni: 'Imperial College London, UK',
          year: '10/2014 - current'
        },{
          title: 'MEng. Computing',
          major: 'Computer Vision, Machine Learning, Software Engineering, System, Network',
          uni: 'Imperial College London, UK',
          year: '09/2010 - 09/2014'
        },{
          title: 'A-Level',
          major: 'Mathematics (A*), Further Mathematics (A*), Physics (A)',
          uni: 'Leicester Grammar School, UK',
          year: '09/2007 - 09/2009'
        }
      ];

      $scope.publications = [
        {
          authors: 'Yuxiang Zhou, Epameinondas Antonakos, Anastasios Roussos, Stefanos Zafeiriou',
          title: 'Estimating Correspondences of Deformable Objects "In-the-wild"',
          url: '',
          location: 'CVPR 2016, Las Vagas, Nevada, US'
        },{
          authors: 'Yun Liao, Yuxiang Zhou, Hua Zhou, Zhihong Liang',
          title: 'Fingertips Detection Algorithm Based on Skin Colour Filtering and Distance Transformation',
          url: '',
          location: 'QSIC 2012, Xi’an, China'
        },
      ];

      $scope.languages = [
        {
          name: 'Mandarin. Chinese',
          level_title: 'Native',
          level: new Array(5)
        },{
          name: 'English',
          level_title: 'Fluent',
          level: new Array(4)
        }
      ];

      $scope.skills = {intro:'', set:[
        {
          title: 'C, C++, C#',
          level: 95,
          level_title: 'Expert',
          tips: ''
        },{
          title: 'Objective-C & Java',
          level: 95,
          level_title: 'Expert',
          tips: ''
        },{
          title: 'Python & Matlab',
          level: 95,
          level_title: 'Expert',
          tips: ''
        },{
          title: 'JavaScript, HTML5, CSS3',
          level: 95,
          level_title: 'Expert',
          tips: ''
        },{
          title: 'SQL, MongoDB, PHP',
          level: 95,
          level_title: 'Expert',
          tips: ''
        },{
          title: 'Haskell & Prolog',
          level: 80,
          level_title: 'Pro',
          tips: ''
        },{
          title: 'Visual Basic, Assembly Code',
          level: 80,
          level_title: 'Pro',
          tips: ''
        }
      ]};

      $scope.featured_projects = [
        {
          title: 'Market Analysor',
          url: 'http://178.62.38.12:9000',
          summary: 'The project fetches latest stock information from verious resources and migrated in a simple view. Also machine learning algorithms are applyed for more complex analysis.',
          img: 'images/marketanalysor.png',
          descriptions: []
        }
      ];
      $scope.projects = [];

      $scope.academic_projects = [
        {
          title: 'Predictive Remote Execution for Mobile Code Offloading (Final Year Project)',
          summary: 'Designed and implemented an speculative code offloading infrastructure, which logs user actions and makes prediction of next requests based on historical user events. Guaranteed the improvement from introducing the speculative calculation feature into offloading system. Experienced relatively long term individual research on a project.',
        },{
          title: 'GPUVerify IDE Plugin',
          summary: 'Designed and implemented an IDE plugin for GPUVerify (a tool for formal verification of graphics processing unit kernels, developed by the Multicore Programming Group at Imperial in collaboration with Microsoft Research)with graphical user interface providing graphical feedback related to error message and command-line configuration. Introduced Agile Product Development to manage the whole steps of software development using JIRA. Produced a very functional Eclipse Plug-in using Java and experimented on OpenCL for GPU programming.',
        },{
          title: 'Operating System (Pintos)',
          summary: 'Act as group leader and project manager in terms of work distribution, efficient time management and motivation. Obtained valuable experience in teamwork and had a deep understanding of principles of operating systems. Built a basic functional Pintos OS including thread scheduling, system calls and virtual memory management from skeleton using C.',
        },{
          title: 'Trading Game (Web Application)',
          summary: 'Applied and experienced HTML5, CSS3, Web Socket, PHP and numerous technologies for a multi-player, real time and database based web trading game. Experimented on GIT as version control software.',
        }
      ];

      $scope.experiences = [
        {
          job_title: 'Mobile Development, Industrial Placement',
          company: 'Bloomberg L.P., London, UK',
          year: '04/2013 – 09/2013',
          summary: 'Joined Bloomberg Mobile Professional team and focused on implementing Bloomberg Professional Service functionality into Bloomberg Anywhere (Core Company Mobile Product) in terms of 5 different projects. Majorly focused on a web-based implementation of certain functionality and integrate it into mobile seamlessly using JavaScript, HTML5 and CSS3 with mobile specific native implementation. Experienced professional, complete, worldwide scaled software development and team management within a large team.'
        },{
          job_title: 'Web Platform development, Internship',
          company: 'Kunming Huaruan Software and Technology Ltd, Yunnan, China',
          year: '07/2012 – 10/2012 & 07/2011 – 10/2011',
          summary: 'Produced an Office Automation System (OAS), using Silverlight application based on ASP.NET framework and Model-View-Controller (MVC) model, for Finance Division of Yunnan University. Acquired experience on web desktop developing , authentication passing and dynamic application extension using JQuery, HTML5, CSS3 for front-end development whereas using ASP.NET and Microsoft SQL Server for back-end development on IIS7 server with implementing communication between frontend and backend using Windows Communication Foundation (WCF). Suggested a better graphical data representation as a replacement of serialised list representation.'
        },{
          job_title: 'Website Development, Internship',
          company: 'Advertising Online Ltd, St. Neots, UK',
          year: '01/2011 – 07/2011',
          summary: 'Involved in website development for an online taxi booking co. http://www.taxionline.ltd.uk/. Worked as a team to make front-end designing using HTML, CSS, Ajax and JavaScript, as well as implemented secured online payment system. Completed and deployed back-end managing websites for dedicated users using ASP and MySQL on Apache2.'
        },
      ];

      $scope.teaching = [
        {
          job_title: 'Teaching Assistant',
          company: 'Department of Computing, Imperial College London, UK',
          year: '10/2015 – 04/2016 & 10/2014 – 04/2015 & 10/2012 – 04/2013',
          summary: 'Joined Bloomberg Mobile Professional team and focused on implementing Bloomberg Professional Service functionality into Bloomberg Anywhere (Core Company Mobile Product) in terms of 5 different projects. Majorly focused on a web-based implementation of certain functionality and integrate it into mobile seamlessly using JavaScript, HTML5 and CSS3 with mobile specific native implementation. Experienced professional, complete, worldwide scaled software development and team management within a large team.'
        }
      ];
    }
  ]
);
