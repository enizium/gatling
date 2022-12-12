package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class GetAllEmployee extends Simulation{

  val httpConf = http.baseUrl("http://localhost:8080")
    .header("Accept", value = "application/json")
    .header("content-type", value ="application/json")

  val scn = scenario("get all employee details")
    .exec(http("get employee contact request")
      .get("/employee/getcontacts")
      .check(status is 200))

  setUp(scn.inject(atOnceUsers(500))).protocols(httpConf)

}