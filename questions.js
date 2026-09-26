window.QUESTION_BANK = [
  {
    topic: "Java",
    level: "easy",
    type: "choice",
    question: "Which keyword is used to create a class in Java?",
    options: ["class", "object", "struct", "define"],
    answer: "class",
    explanation: "`class` declares a Java class. Objects are created from classes."
  },
  {
    topic: "Java",
    level: "easy",
    type: "choice",
    question: "Which Java type is commonly used for true or false values?",
    options: ["int", "boolean", "String", "double"],
    answer: "boolean",
    explanation: "`boolean` stores either `true` or `false`."
  },
  {
    topic: "Java",
    level: "easy",
    type: "trueFalse",
    question: "Java source files usually use the `.java` extension.",
    answer: "True",
    explanation: "Java source code is written in `.java` files and compiled into bytecode."
  },
  {
    topic: "Java",
    level: "easy",
    type: "short",
    question: "What method name is the usual entry point of a Java application?",
    answer: "main",
    explanation: "The JVM starts a normal Java program from the `main` method."
  },
  {
    topic: "Java",
    level: "medium",
    type: "choice",
    question: "Which statement about Java interfaces is correct?",
    options: [
      "A class can implement multiple interfaces",
      "Interfaces must be instantiated directly",
      "Interfaces cannot contain constants",
      "A class can extend multiple classes"
    ],
    answer: "A class can implement multiple interfaces",
    explanation: "Java allows a class to implement multiple interfaces, while class inheritance is single inheritance."
  },
  {
    topic: "Java",
    level: "medium",
    type: "choice",
    question: "Which collection does not allow duplicate elements?",
    options: ["List", "Set", "Queue", "Map"],
    answer: "Set",
    explanation: "`Set` represents unique elements. `Map` stores key-value pairs, not plain elements."
  },
  {
    topic: "Java",
    level: "medium",
    type: "trueFalse",
    question: "`HashMap` guarantees insertion order.",
    answer: "False",
    explanation: "`HashMap` does not guarantee iteration order. `LinkedHashMap` preserves insertion order."
  },
  {
    topic: "Java",
    level: "medium",
    type: "short",
    question: "What Java feature lets one method name have different parameter lists?",
    answer: "overloading",
    explanation: "Method overloading means same method name, different parameters."
  },
  {
    topic: "Java",
    level: "hard",
    type: "choice",
    question: "Which statement about `equals` and `hashCode` is correct?",
    options: [
      "Equal objects should return the same hash code",
      "Equal objects must be the same instance",
      "`hashCode` decides object equality by itself",
      "`equals` must always compare every field"
    ],
    answer: "Equal objects should return the same hash code",
    explanation: "The contract requires equal objects to have the same hash code, especially for hash-based collections."
  },
  {
    topic: "Java",
    level: "hard",
    type: "trueFalse",
    question: "A checked exception must be caught or declared by the method signature.",
    answer: "True",
    explanation: "Checked exceptions are enforced by the compiler unless handled or declared with `throws`."
  },
  {
    topic: "Java",
    level: "hard",
    type: "short",
    question: "Which keyword marks a variable as not serialized by Java serialization?",
    answer: "transient",
    explanation: "`transient` tells Java serialization to skip that field."
  },
  {
    topic: "SQL",
    level: "easy",
    type: "choice",
    question: "Which SQL command is used to read rows from a table?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "SELECT",
    explanation: "`SELECT` retrieves data from one or more tables."
  },
  {
    topic: "SQL",
    level: "easy",
    type: "trueFalse",
    question: "`WHERE` is used to filter rows in a query.",
    answer: "True",
    explanation: "`WHERE` limits rows to those matching a condition."
  },
  {
    topic: "SQL",
    level: "easy",
    type: "short",
    question: "Which clause sorts SQL query results?",
    answer: "ORDER BY",
    explanation: "`ORDER BY` sorts rows by one or more columns."
  },
  {
    topic: "SQL",
    level: "medium",
    type: "choice",
    question: "Which join returns rows that have matching values in both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
    answer: "INNER JOIN",
    explanation: "`INNER JOIN` keeps only matching rows from both sides."
  },
  {
    topic: "SQL",
    level: "medium",
    type: "trueFalse",
    question: "`GROUP BY` is commonly used together with aggregate functions.",
    answer: "True",
    explanation: "`GROUP BY` groups rows so functions like `COUNT`, `SUM`, and `AVG` can summarize them."
  },
  {
    topic: "SQL",
    level: "medium",
    type: "short",
    question: "Which SQL keyword removes duplicate rows from query results?",
    answer: "DISTINCT",
    explanation: "`DISTINCT` returns unique result rows."
  },
  {
    topic: "SQL",
    level: "hard",
    type: "choice",
    question: "Which clause filters grouped results after aggregation?",
    options: ["HAVING", "WHERE", "ORDER BY", "LIMIT"],
    answer: "HAVING",
    explanation: "`WHERE` filters rows before grouping; `HAVING` filters groups after aggregation."
  },
  {
    topic: "SQL",
    level: "hard",
    type: "trueFalse",
    question: "A database transaction should satisfy ACID properties.",
    answer: "True",
    explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability."
  },
  {
    topic: "SQL",
    level: "hard",
    type: "short",
    question: "What isolation problem happens when one transaction reads uncommitted changes from another?",
    answer: "dirty read",
    explanation: "A dirty read means reading data that may still be rolled back."
  },
  {
    topic: "PostgreSQL",
    level: "easy",
    type: "choice",
    question: "Which PostgreSQL command lists databases in the `psql` shell?",
    options: ["\\l", "\\d", "\\c", "\\q"],
    answer: "\\l",
    explanation: "In `psql`, `\\l` lists available databases."
  },
  {
    topic: "PostgreSQL",
    level: "easy",
    type: "trueFalse",
    question: "PostgreSQL is a relational database.",
    answer: "True",
    explanation: "PostgreSQL is an open-source relational database system."
  },
  {
    topic: "PostgreSQL",
    level: "easy",
    type: "short",
    question: "Which PostgreSQL type is often used for auto-incrementing integer IDs?",
    answer: "serial",
    explanation: "`serial` is a common shorthand for auto-incrementing integer IDs."
  },
  {
    topic: "PostgreSQL",
    level: "medium",
    type: "choice",
    question: "Which PostgreSQL feature stores semi-structured JSON data efficiently?",
    options: ["JSONB", "VARCHAR", "SERIAL", "BOOLEAN"],
    answer: "JSONB",
    explanation: "`JSONB` stores JSON in a binary format and supports indexing."
  },
  {
    topic: "PostgreSQL",
    level: "medium",
    type: "trueFalse",
    question: "An index can speed up reads but may add cost to writes.",
    answer: "True",
    explanation: "Indexes must be maintained during inserts, updates, and deletes."
  },
  {
    topic: "PostgreSQL",
    level: "medium",
    type: "short",
    question: "Which command shows the execution plan of a PostgreSQL query?",
    answer: "EXPLAIN",
    explanation: "`EXPLAIN` shows how PostgreSQL plans to execute a query."
  },
  {
    topic: "PostgreSQL",
    level: "hard",
    type: "choice",
    question: "Which index type is commonly used for full-text search in PostgreSQL?",
    options: ["GIN", "BTREE", "HASH", "BRIN"],
    answer: "GIN",
    explanation: "GIN indexes are commonly used for full-text search and JSONB queries."
  },
  {
    topic: "PostgreSQL",
    level: "hard",
    type: "trueFalse",
    question: "`VACUUM` helps PostgreSQL reclaim storage from dead rows.",
    answer: "True",
    explanation: "PostgreSQL uses MVCC, so vacuuming cleans up old row versions."
  },
  {
    topic: "PostgreSQL",
    level: "hard",
    type: "short",
    question: "What PostgreSQL mechanism allows multiple versions of rows for transaction isolation?",
    answer: "MVCC",
    explanation: "MVCC means Multi-Version Concurrency Control."
  },
  {
    topic: "Spring Boot",
    level: "easy",
    type: "choice",
    question: "Which annotation marks a class as a REST controller in Spring?",
    options: ["@RestController", "@Entity", "@Autowired", "@Bean"],
    answer: "@RestController",
    explanation: "`@RestController` combines controller behavior with automatic response body serialization."
  },
  {
    topic: "Spring Boot",
    level: "easy",
    type: "trueFalse",
    question: "Spring Boot can start an embedded web server.",
    answer: "True",
    explanation: "Spring Boot apps commonly run with embedded Tomcat, Jetty, or Undertow."
  },
  {
    topic: "Spring Boot",
    level: "easy",
    type: "short",
    question: "Which file commonly stores Spring Boot configuration properties?",
    answer: "application.properties",
    explanation: "`application.properties` or `application.yml` commonly stores app settings."
  },
  {
    topic: "Spring Boot",
    level: "medium",
    type: "choice",
    question: "Which annotation maps HTTP GET requests to a handler method?",
    options: ["@GetMapping", "@PostMapping", "@Service", "@Repository"],
    answer: "@GetMapping",
    explanation: "`@GetMapping` is a shortcut for mapping GET requests."
  },
  {
    topic: "Spring Boot",
    level: "medium",
    type: "trueFalse",
    question: "`@Service` is usually used for business logic classes.",
    answer: "True",
    explanation: "`@Service` marks service-layer components and lets Spring detect them."
  },
  {
    topic: "Spring Boot",
    level: "medium",
    type: "short",
    question: "What pattern does Spring use to provide objects to classes instead of creating them manually?",
    answer: "dependency injection",
    explanation: "Dependency injection lets Spring wire objects and reduce manual construction."
  },
  {
    topic: "Spring Boot",
    level: "hard",
    type: "choice",
    question: "Which Spring Boot feature exposes health, metrics, and operational endpoints?",
    options: ["Actuator", "JPA", "Lombok", "Flyway"],
    answer: "Actuator",
    explanation: "Spring Boot Actuator provides production-ready monitoring and management endpoints."
  },
  {
    topic: "Spring Boot",
    level: "hard",
    type: "trueFalse",
    question: "`@Transactional` can roll back a transaction when an unchecked exception occurs.",
    answer: "True",
    explanation: "By default, Spring rolls back transactions for runtime exceptions."
  },
  {
    topic: "Spring Boot",
    level: "hard",
    type: "short",
    question: "Which Spring interface can run logic after the application context starts?",
    answer: "CommandLineRunner",
    explanation: "`CommandLineRunner` executes code after the Spring application has started."
  },
  {
    topic: "Kafka",
    level: "easy",
    type: "choice",
    question: "What is a Kafka topic?",
    options: ["A named stream of records", "A SQL table", "A Java class", "A REST endpoint"],
    answer: "A named stream of records",
    explanation: "Kafka stores records in named topics."
  },
  {
    topic: "Kafka",
    level: "easy",
    type: "trueFalse",
    question: "A Kafka producer sends messages to Kafka.",
    answer: "True",
    explanation: "Producers publish records to topics."
  },
  {
    topic: "Kafka",
    level: "easy",
    type: "short",
    question: "What is the component that reads records from Kafka called?",
    answer: "consumer",
    explanation: "Consumers subscribe to topics and read records."
  },
  {
    topic: "Kafka",
    level: "medium",
    type: "choice",
    question: "Why are Kafka topics split into partitions?",
    options: [
      "To scale throughput and parallel processing",
      "To remove the need for brokers",
      "To convert messages to SQL",
      "To make every message global ordered"
    ],
    answer: "To scale throughput and parallel processing",
    explanation: "Partitions allow Kafka to distribute load and let consumers process in parallel."
  },
  {
    topic: "Kafka",
    level: "medium",
    type: "trueFalse",
    question: "Kafka guarantees ordering within a single partition.",
    answer: "True",
    explanation: "Kafka preserves record order inside each partition, not across all partitions."
  },
  {
    topic: "Kafka",
    level: "medium",
    type: "short",
    question: "What Kafka value identifies a consumer's position in a partition?",
    answer: "offset",
    explanation: "An offset is the position of a record in a partition."
  },
  {
    topic: "Kafka",
    level: "hard",
    type: "choice",
    question: "What does a consumer group allow?",
    options: [
      "Multiple consumers to share partitions of subscribed topics",
      "One consumer to receive every partition duplicate",
      "A producer to write without a topic",
      "A broker to store relational tables"
    ],
    answer: "Multiple consumers to share partitions of subscribed topics",
    explanation: "Kafka assigns partitions among consumers in the same group for scalable consumption."
  },
  {
    topic: "Kafka",
    level: "hard",
    type: "trueFalse",
    question: "Kafka retention is based only on whether consumers have read the messages.",
    answer: "False",
    explanation: "Kafka retention is usually time- or size-based, independent of individual consumer reads."
  },
  {
    topic: "Kafka",
    level: "hard",
    type: "short",
    question: "What Kafka concept copies partition data across brokers for fault tolerance?",
    answer: "replication",
    explanation: "Replication keeps partition copies on multiple brokers."
  },
  {
    topic: "Git",
    level: "easy",
    type: "choice",
    question: "Which command records staged changes in Git history?",
    options: ["git commit", "git push", "git clone", "git status"],
    answer: "git commit",
    explanation: "`git commit` saves staged changes as a new commit."
  },
  {
    topic: "Git",
    level: "easy",
    type: "trueFalse",
    question: "`git status` shows changed files and staging state.",
    answer: "True",
    explanation: "`git status` summarizes the working tree and staging area."
  },
  {
    topic: "Git",
    level: "easy",
    type: "short",
    question: "Which command downloads a repository for the first time?",
    answer: "git clone",
    explanation: "`git clone` copies an existing repository locally."
  },
  {
    topic: "Git",
    level: "medium",
    type: "choice",
    question: "What does `git pull` usually do?",
    options: [
      "Fetches remote changes and integrates them",
      "Deletes local commits",
      "Creates a new repository",
      "Shows only staged files"
    ],
    answer: "Fetches remote changes and integrates them",
    explanation: "`git pull` fetches from a remote and then merges or rebases depending on configuration."
  },
  {
    topic: "Git",
    level: "medium",
    type: "trueFalse",
    question: "A branch is a movable pointer to a commit.",
    answer: "True",
    explanation: "Branches move as new commits are added."
  },
  {
    topic: "Git",
    level: "medium",
    type: "short",
    question: "Which Git command temporarily stores uncommitted changes?",
    answer: "git stash",
    explanation: "`git stash` saves local changes so the working tree can be cleaned temporarily."
  },
  {
    topic: "Git",
    level: "hard",
    type: "choice",
    question: "What is a rebase commonly used for?",
    options: [
      "Reapplying commits on top of another base commit",
      "Deleting the remote repository",
      "Showing disk usage",
      "Encrypting commits"
    ],
    answer: "Reapplying commits on top of another base commit",
    explanation: "Rebase rewrites commit ancestry by replaying commits onto a new base."
  },
  {
    topic: "Git",
    level: "hard",
    type: "trueFalse",
    question: "Changing published shared history with force push can disrupt teammates.",
    answer: "True",
    explanation: "Force pushing rewritten history may break other people's local branches."
  },
  {
    topic: "Git",
    level: "hard",
    type: "short",
    question: "Which Git command finds the commit that introduced a bug using binary search?",
    answer: "git bisect",
    explanation: "`git bisect` searches history to identify the first bad commit."
  }
];
