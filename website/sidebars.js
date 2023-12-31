module.exports = {
  docs: [
    {
      type: "doc",
      id: "contents",
    },
    {
      type: "doc",
      id: "reading-list",
    },
    {
      type: "doc",
      id: "certifications",
    },
    {
      type: "category",
      label: "Article Summaries",
      items: ["scaling-memcached"],
    },
    {
      type: "category",
      label: "Book Summaries",
      items: [
        {
          type: "category",
          label: "Designing Data-Intensive Applications",
          items: ["reliable-scalable-maintainable"],
        },
      ],
    },
    {
      type: "category",
      label: "Cloud and Networking",
      items: [
        "docker-cheatsheet",
        "gcp-gke-cheatsheet",
        "mininet-setup",
        "network-model",
      ],
    },
    {
      type: "category",
      label: "Cyber Cheatsheets",
      items: [
        "kali-cheatsheet",
        "hacking-for-beginners-cheatsheet"
      ],
    },
    {
      type: "category",
      label: "Malware Courses",
      items: [
        "john-hammond-malware",
        "network-chuck"
      ],
    },
    {
      type: "category",
      label: "Programming",
      items: [
        {
          Ruby: ["ruby-dependency-management"],
        },
        "python-libraries-cheatsheet",
        "c-cheatsheet",
        "js-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Tooling and OS",
      items: [
        {
          Git: ["git-cheatsheet", "git-ignore-file"],
        },
        "os-ubuntu-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Web Development",
      items: [
        {
          MongoDB: ["mongodb-setup", "mongodb-cheatsheet"],
          NodeJS: ["nodejs-auto-reload", "nodejs-set-npm-run-shell"],
        },
      ],
    },
  ],
};
