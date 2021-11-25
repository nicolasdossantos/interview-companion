const mockApplications = [
    {
        companyName: 'Apple',
        position: 'Software Engineer',
        appliedOn: '11/01/2021',
        jobURL: 'https://apple.com',
        status: 'Interview',
        notes: 'approached by recruiter on LinkedIn',
        offer: '',
        recruiters: [
            {
                name: 'John Smith',
                email: 'jsmith@apple.com',
                phone: '2159324398'
            }
        ],
        interviews: [
            {
                title: 'Online Asssessment',
                time: '9:30 AM',
                date: '11/02/2021',
                location: 'Remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'In this interview I was able to solve the main problem and its follow up in optimal time and space complexity. The interviewer seemed pleased.',
                done: true
            },
            {
                title: 'Phone Interview',
                time: '10:30 AM',
                date: new Date(),
                location: '2020 Apple Street, San Francisco, CA',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: false
            },
            {
                title: 'On Site I',
                time: '10:30 AM',
                date: new Date('2020-11-01'),
                location: '2020 Apple Street, San Francisco, CA',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: false
            },
            {
                title: 'On Site II',
                time: '10:30 AM',
                date: new Date('2018-10-01'),
                location: '2020 Apple Street, San Francisco, CA',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: false
            }
        ]
    },
    {
        companyName: 'Google',
        position: 'Software Developer',
        appliedOn: '11/01/2021',
        jobURL: 'https://google.com',
        status: 'Interview',
        notes: 'Applied on website',
        offer: '',
        recruiters: [
            {
                name: 'Charles Gagum',
                email: 'cgagum@google.com',
                phone: '2159324398'
            }
        ],
        interviews: [
            {
                title: 'Online Asssessment',
                time: '9:30 AM',
                date: '11/02/2021',
                location: 'Remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'In this interview I was able to solve the main problem and its follow up in optimal time and space complexity. The interviewer seemed pleased.',
                done: false
            }
        ]
    },
    {
        companyName: 'Netflix',
        position: 'Software Engineer',
        appliedOn: '11/01/2021',
        jobURL: 'https://netflix.com',
        status: 'Applied',
        notes: 'Applied on website',
        offer: '',
        recruiters: [
            {
                name: 'John Smith',
                email: 'jsmith@apple.com',
                phone: '2159324398'
            }
        ],
        interviews: []
    },
    {
        companyName: 'Facebook',
        position: 'Frontend Software Engineer',
        appliedOn: '11/01/2021',
        jobURL: 'https://apple.com',
        status: 'Offer',
        notes: 'approached by recruiter on LinkedIn',
        offer: 'Base Salary: $250k, TC: $380k',
        recruiters: [
            {
                name: 'John Smith',
                email: 'jsmith@apple.com',
                phone: '2159324398'
            }
        ],
        interviews: [
            {
                title: 'Online Asssessment',
                time: '9:30 AM',
                date: '11/02/2021',
                location: 'Remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'In this interview I was able to solve the main problem and its follow up in optimal time and space complexity. The interviewer seemed pleased.',
                done: true
            },
            {
                title: 'Online Asssessment',
                time: '10:30 AM',
                date: new Date(),
                location: 'remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: true
            }
        ]
    },
    {
        companyName: 'Lockheed Martin',
        position: 'Frontend Software Engineer',
        appliedOn: '11/01/2021',
        jobURL: 'https://apple.com',
        status: 'Archived',
        notes: 'approached by recruiter on LinkedIn',
        offer: 'Base Salary: $250k, TC: $380k',
        recruiters: [
            {
                name: 'John Smith',
                email: 'jsmith@apple.com',
                phone: '2159324398'
            }
        ],
        interviews: [
            {
                title: 'Online Asssessment',
                time: '9:30 AM',
                date: '11/02/2021',
                location: 'Remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'In this interview I was able to solve the main problem and its follow up in optimal time and space complexity. The interviewer seemed pleased.',
                done: true
            },
            {
                title: 'Online Asssessment',
                time: '10:30 AM',
                date: new Date(),
                location: 'remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: true
            }
        ]
    },
    {
        companyName: 'Amazon',
        position: 'Software Developer',
        appliedOn: '11/01/2021',
        jobURL: 'https://apple.com',
        status: 'Awaiting Results',
        notes: 'approached by recruiter on LinkedIn',
        offer: '',
        recruiters: [
            // {
            //     name: 'John Smith',
            //     email: 'jsmith@apple.com',
            //     phone: '2159324398'
            // }
        ],
        interviews: [
            {
                title: 'Online Asssessment',
                time: '9:30 AM',
                date: '11/02/2021',
                location: 'Remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'In this interview I was able to solve the main problem and its follow up in optimal time and space complexity. The interviewer seemed pleased.',
                done: true
            },
            {
                title: 'Online Asssessment',
                time: '10:30 AM',
                date: new Date(),
                location: '2020 Apple Street, San Francisco, CA',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: true
            }
        ]
    },
    {
        companyName: 'Stripe',
        position: 'Software Engineer',
        appliedOn: '11/01/2021',
        jobURL: 'https://apple.com',
        status: 'Rejected',
        notes: 'approached by recruiter on LinkedIn',
        offer: '',
        recruiters: [
            {
                name: 'John Smith',
                email: 'jsmith@apple.com',
                phone: '2159324398'
            }
        ],
        interviews: [
            {
                title: 'Online Asssessment',
                time: '9:30 AM',
                date: '11/02/2021',
                location: 'Remote',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'In this interview I was able to solve the main problem and its follow up in optimal time and space complexity. The interviewer seemed pleased.',
                done: true
            },
            {
                title: 'Online Asssessment',
                time: '10:30 AM',
                date: new Date(),
                location: '2020 Apple Street, San Francisco, CA',
                link: 'https://googlemeet.com/isjhiuhsuishihduihdi',
                notes: 'Prepare for graph and tree problems',
                done: true
            }
        ]
    }
]

export default mockApplications;
