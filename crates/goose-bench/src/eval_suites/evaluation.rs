use crate::bench_session::BenchAgent;
use crate::bench_work_dir::BenchmarkWorkDir;
use anyhow::Result;
use async_trait::async_trait;
use serde::Serialize;

pub type Model = (String, String);
pub type Extension = String;

#[derive(Debug, Serialize)]
pub enum EvalMetricValue {
    Integer(i64),
    Float(f64),
    String(String),
    Boolean(bool),
}
#[derive(Debug, Serialize)]
pub struct EvalMetric {
    pub name: String,
    pub value: EvalMetricValue,
}

#[derive(Debug, Default)]
pub struct ExtensionRequirements {
    pub builtin: Vec<String>,
    pub external: Vec<String>,
}

#[async_trait]
pub trait Evaluation: Send + Sync {
    async fn run(
        &self,
        agent: &mut Box<dyn BenchAgent>,
        run_loc: &mut BenchmarkWorkDir,
    ) -> Result<Vec<(String, EvalMetricValue)>>;

    fn name(&self) -> &str;

    fn required_extensions(&self) -> ExtensionRequirements {
        ExtensionRequirements {
            builtin: Vec::new(),
            external: Vec::new(),
        }
    }
}
