package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class AddEmployee  extends Simulation{

  val httpConf = http.baseUrl("http://localhost:8080")
    .header("Accept", value = "application/json")
    .header("content-type", value ="application/json")

  val scn = scenario("Add and Delete employee scenario")
    .exec(http("Add employee request")
    .post("/employee/add")
    .body(RawFileBody("./src/test/resources/bodies/AddEmployee.json")).asJson
    .check(status is 201))

  setUp(scn.inject(atOnceUsers(10))).protocols(httpConf)
}
