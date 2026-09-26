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
  },
  {topic:"Java",level:"easy",type:"choice",question:"Which keyword creates an object in Java?",options:["new","make","create","instance"],answer:"new",explanation:"The `new` keyword allocates an object and invokes a constructor."},
  {topic:"Java",level:"easy",type:"trueFalse",question:"Java variable names are case-sensitive.",answer:"True",explanation:"`count` and `Count` are different identifiers in Java."},
  {topic:"Java",level:"easy",type:"short",question:"Which keyword declares a constant variable in Java?",answer:"final",explanation:"A `final` variable can be assigned only once."},
  {topic:"Java",level:"medium",type:"choice",question:"Which interface is the root of the Java collection hierarchy?",options:["Collection","Iterable","List","Iterator"],answer:"Collection",explanation:"`Collection` is the main root interface for groups of objects; `Map` is separate."},
  {topic:"Java",level:"medium",type:"trueFalse",question:"An abstract class can be instantiated directly.",answer:"False",explanation:"Abstract classes must be extended before concrete subclasses can be instantiated."},
  {topic:"Java",level:"medium",type:"short",question:"Which Java keyword refers to the current object?",answer:"this",explanation:"`this` refers to the current object instance."},
  {topic:"Java",level:"hard",type:"choice",question:"Which garbage collector concept describes an object that can no longer be reached?",options:["Unreachable object","Pinned object","Escaped object","Root object"],answer:"Unreachable object",explanation:"An unreachable object may be reclaimed by the garbage collector."},
  {topic:"Java",level:"hard",type:"trueFalse",question:"A Java `finally` block normally runs whether an exception is thrown or not.",answer:"True",explanation:"`finally` is intended for cleanup and normally executes after try/catch flow."},
  {topic:"SQL",level:"easy",type:"choice",question:"Which SQL command adds new rows to a table?",options:["INSERT","ADD","CREATE","APPEND"],answer:"INSERT",explanation:"`INSERT` adds one or more rows to a table."},
  {topic:"SQL",level:"easy",type:"trueFalse",question:"A primary key identifies each row uniquely.",answer:"True",explanation:"A primary key constraint prevents duplicate key values."},
  {topic:"SQL",level:"easy",type:"short",question:"Which SQL command changes existing rows?",answer:"UPDATE",explanation:"`UPDATE` changes values in rows that match its condition."},
  {topic:"SQL",level:"medium",type:"choice",question:"Which function counts rows in SQL?",options:["COUNT","TOTAL","ROWS","SIZE"],answer:"COUNT",explanation:"`COUNT` returns the number of rows or non-NULL values."},
  {topic:"SQL",level:"medium",type:"trueFalse",question:"A NULL value is the same as an empty string.",answer:"False",explanation:"NULL means unknown or missing; an empty string is a value."},
  {topic:"SQL",level:"medium",type:"short",question:"Which SQL command permanently removes a table definition?",answer:"DROP TABLE",explanation:"`DROP TABLE` removes the table and its definition."},
  {topic:"SQL",level:"hard",type:"choice",question:"What is database normalization mainly intended to reduce?",options:["Data redundancy","Network latency","Query syntax","User permissions"],answer:"Data redundancy",explanation:"Normalization reduces duplication and update anomalies."},
  {topic:"SQL",level:"hard",type:"trueFalse",question:"A composite index can contain more than one column.",answer:"True",explanation:"A composite index is built from multiple columns in a defined order."},
  {topic:"PostgreSQL",level:"easy",type:"choice",question:"Which PostgreSQL command connects to a database in `psql`?",options:["\\c","\\l","\\d","\\q"],answer:"\\c",explanation:"In `psql`, `\\c database_name` connects to another database."},
  {topic:"PostgreSQL",level:"easy",type:"trueFalse",question:"PostgreSQL supports transactions.",answer:"True",explanation:"PostgreSQL provides COMMIT and ROLLBACK transaction commands."},
  {topic:"PostgreSQL",level:"easy",type:"short",question:"Which PostgreSQL command exits the `psql` shell?",answer:"\\q",explanation:"The `\\q` meta-command quits the `psql` client."},
  {topic:"PostgreSQL",level:"medium",type:"choice",question:"Which PostgreSQL type stores a calendar date and time with a time zone?",options:["timestamp with time zone","date","time","interval"],answer:"timestamp with time zone",explanation:"This type stores an instant while displaying it in the session time zone."},
  {topic:"PostgreSQL",level:"medium",type:"trueFalse",question:"PostgreSQL can create indexes on expressions.",answer:"True",explanation:"Expression indexes can index a computed expression such as lower(email)."},
  {topic:"PostgreSQL",level:"medium",type:"short",question:"Which PostgreSQL command creates a new table?",answer:"CREATE TABLE",explanation:"`CREATE TABLE` defines a new table and its columns."},
  {topic:"PostgreSQL",level:"hard",type:"choice",question:"Which PostgreSQL isolation level prevents dirty reads but may allow phantom reads?",options:["Read Committed","Read Uncommitted","Serializable only","No Isolation"],answer:"Read Committed",explanation:"Read Committed is PostgreSQL's default isolation level."},
  {topic:"PostgreSQL",level:"hard",type:"trueFalse",question:"A PostgreSQL foreign key can reference a unique key, not only a primary key.",answer:"True",explanation:"Referenced columns may use a primary key or suitable unique constraint."},
  {topic:"Spring Boot",level:"easy",type:"choice",question:"Which annotation marks a class as a Spring-managed component?",options:["@Component","@Value","@Profile","@Import"],answer:"@Component",explanation:"`@Component` makes a class eligible for component scanning."},
  {topic:"Spring Boot",level:"easy",type:"trueFalse",question:"Spring Boot starters provide convenient dependency bundles.",answer:"True",explanation:"Starters group commonly used dependencies for a feature."},
  {topic:"Spring Boot",level:"easy",type:"short",question:"Which annotation injects a configuration value into a field?",answer:"@Value",explanation:"`@Value` can inject a property or expression into a Spring bean."},
  {topic:"Spring Boot",level:"medium",type:"choice",question:"Which annotation maps a Java class to a database table in JPA?",options:["@Entity","@TableOnly","@Record","@Documented"],answer:"@Entity",explanation:"`@Entity` marks a class as a persistent JPA entity."},
  {topic:"Spring Boot",level:"medium",type:"trueFalse",question:"Spring profiles can activate different configuration for different environments.",answer:"True",explanation:"Profiles allow environment-specific beans and properties."},
  {topic:"Spring Boot",level:"medium",type:"short",question:"Which annotation maps an HTTP POST request in Spring MVC?",answer:"@PostMapping",explanation:"`@PostMapping` maps handler methods to HTTP POST requests."},
  {topic:"Spring Boot",level:"hard",type:"choice",question:"Which Spring mechanism handles cross-cutting concerns such as transactions?",options:["AOP proxies","JDBC drivers","Servlet filters only","JPA entities"],answer:"AOP proxies",explanation:"Spring commonly applies cross-cutting behavior through proxies."},
  {topic:"Spring Boot",level:"hard",type:"trueFalse",question:"Constructor injection makes required dependencies explicit to a class.",answer:"True",explanation:"Constructor injection makes dependencies visible and supports immutable fields."},
  {topic:"Kafka",level:"easy",type:"choice",question:"Which Kafka component stores topics and their partitions?",options:["Broker","Producer","Consumer","Serializer"],answer:"Broker",explanation:"Kafka brokers store partition data and serve client requests."},
  {topic:"Kafka",level:"easy",type:"trueFalse",question:"Kafka messages can have keys and values.",answer:"True",explanation:"A Kafka record commonly contains a key, value, timestamp, and metadata."},
  {topic:"Kafka",level:"easy",type:"short",question:"What Kafka client publishes records to a topic?",answer:"producer",explanation:"A producer sends records to Kafka topics."},
  {topic:"Kafka",level:"medium",type:"choice",question:"What usually determines the partition for a keyed Kafka record?",options:["The record key","The consumer name","The broker port","The topic description"],answer:"The record key",explanation:"Kafka commonly hashes a record key to choose a partition."},
  {topic:"Kafka",level:"medium",type:"trueFalse",question:"Two consumers in the same consumer group normally share assigned partitions.",answer:"True",explanation:"Each partition is assigned to one consumer within a group at a time."},
  {topic:"Kafka",level:"medium",type:"short",question:"What Kafka operation confirms that a consumer processed a record position?",answer:"commit",explanation:"Consumers commit offsets to record their processing position."},
  {topic:"Kafka",level:"hard",type:"choice",question:"What happens when a Kafka consumer group member leaves?",options:["Partitions may be rebalanced","The topic is deleted","All offsets are erased","The broker shuts down"],answer:"Partitions may be rebalanced",explanation:"Kafka can rebalance partitions among remaining group members."},
  {topic:"Kafka",level:"hard",type:"trueFalse",question:"Kafka replication factor describes how many copies of partition data exist.",answer:"True",explanation:"Replication factor is the number of replicas for each partition."},
  {topic:"Git",level:"easy",type:"choice",question:"Which command displays the commit history?",options:["git log","git history","git commits","git timeline"],answer:"git log",explanation:"`git log` displays commits and their metadata."},
  {topic:"Git",level:"easy",type:"trueFalse",question:"`git add` places changes into the staging area.",answer:"True",explanation:"`git add` stages selected changes for the next commit."},
  {topic:"Git",level:"easy",type:"short",question:"Which command uploads local commits to a remote repository?",answer:"git push",explanation:"`git push` sends local commits and references to a remote."},
  {topic:"Git",level:"medium",type:"choice",question:"Which file tells Git which paths to ignore?",options:[".gitignore",".gitkeep",".gitconfig",".gitpaths"],answer:".gitignore",explanation:"`.gitignore` contains patterns for files Git should not track."},
  {topic:"Git",level:"medium",type:"trueFalse",question:"A merge conflict always means Git has corrupted the repository.",answer:"False",explanation:"A conflict means Git needs a person to choose between changes."},
  {topic:"Git",level:"medium",type:"short",question:"Which command creates and switches to a new branch in modern Git?",answer:"git switch -c",explanation:"`git switch -c branch-name` creates and checks out a new branch."},
  {topic:"Git",level:"hard",type:"choice",question:"What does `git cherry-pick` do?",options:["Applies a chosen commit onto the current branch","Deletes all branches","Compresses the repository","Renames the remote"],answer:"Applies a chosen commit onto the current branch",explanation:"Cherry-pick copies changes from selected commits onto the current branch."},
  {topic:"Git",level:"hard",type:"trueFalse",question:"A Git commit normally points to a tree representing the project files.",answer:"True",explanation:"A commit references a tree object containing the file snapshot."},
  {topic:"Java",level:"medium",type:"choice",question:"Which are valid Java access modifiers?",options:["public","private","protected","friendly"],answer:["public","private","protected"],explanation:"Java provides public, protected, package-private, and private access levels."},
  {topic:"Java",level:"hard",type:"choice",question:"Which are characteristics of an immutable Java object?",options:["Its state cannot change after construction","Fields are usually final","It exposes setters for all fields","It can safely share state between threads"],answer:["Its state cannot change after construction","Fields are usually final","It can safely share state between threads"],explanation:"Immutability means state does not change, which can simplify sharing between threads."},
  {topic:"SQL",level:"medium",type:"choice",question:"Which are SQL aggregate functions?",options:["COUNT","SUM","AVG","REPLACE"],answer:["COUNT","SUM","AVG"],explanation:"COUNT, SUM, and AVG summarize values across rows."},
  {topic:"SQL",level:"hard",type:"choice",question:"Which constraints help protect relational data integrity?",options:["PRIMARY KEY","FOREIGN KEY","UNIQUE","ORDER BY"],answer:["PRIMARY KEY","FOREIGN KEY","UNIQUE"],explanation:"These constraints enforce identity, relationships, and uniqueness."},
  {topic:"PostgreSQL",level:"medium",type:"choice",question:"Which are PostgreSQL transaction commands?",options:["BEGIN","COMMIT","ROLLBACK","SELECT ALL"],answer:["BEGIN","COMMIT","ROLLBACK"],explanation:"BEGIN starts a transaction; COMMIT saves it and ROLLBACK undoes it."},
  {topic:"PostgreSQL",level:"hard",type:"choice",question:"Which PostgreSQL features can improve query performance?",options:["Indexes","EXPLAIN analysis","Appropriate query predicates","Ignoring statistics"],answer:["Indexes","EXPLAIN analysis","Appropriate query predicates"],explanation:"Indexes, query-plan analysis, and selective predicates can improve performance."},
  {topic:"Spring Boot",level:"medium",type:"choice",question:"Which annotations commonly define Spring web endpoints?",options:["@GetMapping","@PostMapping","@RequestBody","@Autowired only"],answer:["@GetMapping","@PostMapping","@RequestBody"],explanation:"These annotations participate in request mapping and request-body binding."},
  {topic:"Spring Boot",level:"hard",type:"choice",question:"Which are common Spring bean scopes?",options:["singleton","prototype","request","compile-time"],answer:["singleton","prototype","request"],explanation:"Spring supports scopes such as singleton, prototype, request, and session."},
  {topic:"Kafka",level:"medium",type:"choice",question:"Which properties can affect Kafka delivery durability?",options:["acks","replication factor","min.insync.replicas","CSS selector"],answer:["acks","replication factor","min.insync.replicas"],explanation:"Acknowledgements and replica settings affect durability and delivery guarantees."},
  {topic:"Kafka",level:"hard",type:"choice",question:"Which are Kafka record delivery semantics?",options:["At most once","At least once","Exactly once","Never once"],answer:["At most once","At least once","Exactly once"],explanation:"Kafka systems can be designed around at-most-once, at-least-once, or exactly-once semantics."},
  {topic:"Git",level:"medium",type:"choice",question:"Which commands can integrate branch histories?",options:["git merge","git rebase","git cherry-pick","git status"],answer:["git merge","git rebase","git cherry-pick"],explanation:"These commands can bring commits or changes from another line of development."},
  {topic:"Git",level:"hard",type:"choice",question:"Which practices help keep Git history healthy?",options:["Small focused commits","Meaningful commit messages","Reviewing diffs before committing","Committing secrets"],answer:["Small focused commits","Meaningful commit messages","Reviewing diffs before committing"],explanation:"Focused commits, useful messages, and reviewing diffs improve collaboration and maintenance."}
];
